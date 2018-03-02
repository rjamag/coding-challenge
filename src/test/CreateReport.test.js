import React from 'react'
import renderer from 'react-test-renderer'
import { CreateReport } from '../components/CreateReport'
import { shallow, mount, render } from 'enzyme'

const linkId = "cjdzfajlk081z0184iykv7su1"

const myprops =
    { "match": { "path": "/report/:id", "url": "/report/cjdzfajlk081z0184iykv7su1", "isExact": true, "params": { "id": "cjdzfajlk081z0184iykv7su1" } }, "location": { "pathname": "/report/cjdzfajlk081z0184iykv7su1", "search": "", "hash": "", "key": "cghiu0" }, "history": { "length": 6, "action": "POP", "location": { "pathname": "/report/cjdzfajlk081z0184iykv7su1", "search": "", "hash": "", "key": "cghiu0" } }, "feedReportsQuery": { "variables": { "filter": "cjdzfajlk081z0184iykv7su1" }, "loading": false, "networkStatus": 7, "feedReportsFromLink": { "links": [{ "id": "cjdzfajlk081z0184iykv7su1", "url": "www.test1.com", "description": "Este é um primeiro teste", "reports": [{ "id": "cjdzfb5cc082p0184jwbui332", "description": "1", "createdAt": "2018-02-23T04:15:18.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfb7hj082w0184wcboubhw", "description": "2", "createdAt": "2018-02-23T04:15:21.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfc71508570184rxejeigy", "description": "3", "createdAt": "2018-02-23T04:16:07.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfcgyp08600184o6q6jm9g", "description": "4", "createdAt": "2018-02-23T04:16:20.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfcnb7086k0184vfvdeqpg", "description": "5", "createdAt": "2018-02-23T04:16:28.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfczy7087x0184gxes066e", "description": "6", "createdAt": "2018-02-23T04:16:45.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje20erif0bhh0184o1xjp0nv", "description": "7", "createdAt": "2018-02-24T23:41:31.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje29958b0qyp01849y5ixm8s", "description": "1", "createdAt": "2018-02-25T03:49:06.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje2dkm8f0tg101847fobzznf", "description": "9", "createdAt": "2018-02-25T05:49:59.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje55isn7008b01408043ql1u", "description": "1", "createdAt": "2018-02-27T04:27:56.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje6hthge02qm0140g18oefxi", "description": "2", "createdAt": "2018-02-28T02:59:56.000Z", "user": { "id": "cje6begw300hj0140teu6smwa", "name": "Rodrigo Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje6ns3wl08cv0140i28uwk66", "description": "12", "createdAt": "2018-02-28T05:46:50.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje6t8c1t08pv0140ju8jtxmo", "description": "este e um teste", "createdAt": "2018-02-28T08:19:25.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje84ugpw3h140140102wjptu", "description": "14", "createdAt": "2018-03-01T06:32:19.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje84uolp3h300140s8huy2ea", "description": "15", "createdAt": "2018-03-01T06:32:29.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje84vgbq3h940140ltd0s049", "description": "16", "createdAt": "2018-03-01T06:33:05.000Z", "user": { "id": "cje6begw300hj0140teu6smwa", "name": "Rodrigo Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje84vlzb3ha001402zx0wnkc", "description": "17", "createdAt": "2018-03-01T06:33:13.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje84yua23i070140psr9mq05", "description": "18", "createdAt": "2018-03-01T06:35:43.000Z", "user": { "id": "cje6begw300hj0140teu6smwa", "name": "Rodrigo Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje84zae33i4l0140p7fg8ms0", "description": "19", "createdAt": "2018-03-01T06:36:04.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje875lnh420m0140tbxspmse", "description": "123123123123123", "createdAt": "2018-03-01T07:36:58.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje877vcy42nu0140ockph5t4", "description": "456", "createdAt": "2018-03-01T07:38:44.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }], "__typename": "Link" }], "__typename": "Feed" } } }

describe('<CreateReport/> using shallow enzyme', () => {

    it('should render without throwing an error', () => {
        const wrap = shallow(<CreateReport {...myprops} />)

        expect(wrap.find(CreateReport))

        expect(
            wrap.containsMatchingElement(
                <h3>{myprops.feedReportsQuery.feedReportsFromLink.links[0].description} <br /> {myprops.feedReportsQuery.feedReportsFromLink.links[0].url}</h3>
            )
        ).toBeTruthy()

        wrap.find('textarea').simulate('change', {
            target: { value: 'hello' }
        })

        expect(
            wrap.find('button').text()
        ).toEqual('Report Fake News')

        expect(wrap).toMatchSnapshot()
    })

    it('simulate click on report button', () => {
        const reportMutation = () => {
            return Promise.resolve({
                description: 'fake news description',
                linkId: { linkId }
            });
        }

        const wrap = shallow(<CreateReport {...myprops} reportMutation={reportMutation} />)

        wrap.find('textarea').simulate('change', {
            target: { value: 'fake news description' }
        })

        wrap.find('button').simulate('click')
    })

})

describe('<CreateReport/> using react test render', () => {

    const getComponentTree = props => renderer.create(<CreateReport {...myprops} />).toJSON();

    it("renders correctly", () => {
        const componentTree = getComponentTree({
            feedReportsQuery: {}
        });
        expect(componentTree).toMatchSnapshot();
    });


    it("renders loading screen", () => {
        const componentTree = getComponentTree({
            feedReportsQuery: {
                loading: true
            }
        });
        expect(componentTree).toMatchSnapshot();
    });

    it("renders error screen", () => {
        const componentTree = getComponentTree({
            feedReportsQuery: {
                error: true
            }
        });
        expect(componentTree).toMatchSnapshot();
    });

    it("renders content", () => {
        const componentTree = getComponentTree({
            feedReportsQuery: {
                "links": [
                    {
                        "id": "cjdzfajlk081z0184iykv7su1",
                        "url": "www.test1.com",
                        "description": "Este é um primeiro teste",
                        "reports": [
                            {
                                "id": "cjdzfb5cc082p0184jwbui332",
                                "description": "1",
                                "createdAt": "2018-02-23T04:15:18.000Z",
                                "user": {
                                    "id": "cjdzfa7e0081t0184ba5f7q78",
                                    "name": "Rodrigo",
                                    "__typename": "User"
                                },
                                "__typename": "Report"
                            },
                        ]
                    }
                ]

            }
        });
        expect(componentTree).toMatchSnapshot();
    });

})