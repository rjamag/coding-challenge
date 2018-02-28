import React from 'react'
import { shallow, mount, render } from 'enzyme'
import ReportList from '../components/ReportList'
import Report from '../components/Report'

const linkId = "cjdzfajlk081z0184iykv7su1"

const myInputReports =
    [{ "id": "cjdzfb5cc082p0184jwbui332", "description": "1", "createdAt": "2018-02-23T04:15:18.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfb7hj082w0184wcboubhw", "description": "2", "createdAt": "2018-02-23T04:15:21.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfc71508570184rxejeigy", "description": "3", "createdAt": "2018-02-23T04:16:07.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfcgyp08600184o6q6jm9g", "description": "4", "createdAt": "2018-02-23T04:16:20.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfcnb7086k0184vfvdeqpg", "description": "5", "createdAt": "2018-02-23T04:16:28.000Z", "user": { "id": "cjdzfa7e0081t0184ba5f7q78", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cjdzfczy7087x0184gxes066e", "description": "6", "createdAt": "2018-02-23T04:16:45.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje20erif0bhh0184o1xjp0nv", "description": "7", "createdAt": "2018-02-24T23:41:31.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje29958b0qyp01849y5ixm8s", "description": "1", "createdAt": "2018-02-25T03:49:06.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje2dkm8f0tg101847fobzznf", "description": "9", "createdAt": "2018-02-25T05:49:59.000Z", "user": { "id": "cjdzfc0fo084e01843xojr2ne", "name": "Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje55isn7008b01408043ql1u", "description": "1", "createdAt": "2018-02-27T04:27:56.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje6hthge02qm0140g18oefxi", "description": "2", "createdAt": "2018-02-28T02:59:56.000Z", "user": { "id": "cje6begw300hj0140teu6smwa", "name": "Rodrigo Jose", "__typename": "User" }, "__typename": "Report" }, { "id": "cje6ns3wl08cv0140i28uwk66", "description": "12", "createdAt": "2018-02-28T05:46:50.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }, { "id": "cje6t8c1t08pv0140ju8jtxmo", "description": "este e um teste", "createdAt": "2018-02-28T08:19:25.000Z", "user": { "id": "cje55icc7006i01403v3lgypb", "name": "Rodrigo", "__typename": "User" }, "__typename": "Report" }]

describe('<ReportList/>', () => {

    it('should render without throwing an error', () => {
        const wrapper = shallow(<ReportList linkId={linkId} reports={myInputReports} />)

        expect(wrapper.find(ReportList))

        expect(
            wrapper.containsMatchingElement(
                <h4>Fake News Reports</h4>
            )
        ).toBeTruthy()

        const myOutputReport = {
            "id": "cjdzfb5cc082p0184jwbui332",
            "description": "1",
            "createdAt": "2018-02-23T04:15:18.000Z",
            "user": {
                "id": "cjdzfa7e0081t0184ba5f7q78",
                "name": "Rodrigo",
                "__typename": "User"
            },
            "__typename": "Report"
        }

        expect(
            wrapper.containsMatchingElement(
                <Report key={"cjdzfb5cc082p0184jwbui332"} index={0} report={myOutputReport} />
            )
        ).toBeTruthy()

    })

})
