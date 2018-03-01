import React from 'react'
import renderer from "react-test-renderer"
import { CreateReport } from '../components/CreateReport'

describe('<CreateReport/>', () => {

    it('renders with data correctly', () => {


        const getComponentTree = props => renderer.create(<CreateReport {...props} />).toJSON();





        // const linkId = "cjdzfajlk081z0184iykv7su1"

        // const myparams = {
        //     params: { "id": "cjdzfajlk081z0184iykv7su1" }
        // }

        // const myMatch = { "path": "/report/:id", "url": "/report/cjdzfajlk081z0184iykv7su1", "isExact": true, "params": { "id": "cjdzfajlk081z0184iykv7su1" } }

        // const myClient = { "defaultOptions": {}, "resetStoreCallbacks": [], "link": {}, "cache": { "optimistic": [], "watches": [], "silenceBroadcast": false, "config": { "fragmentMatcher": {}, "addTypename": true }, "addTypename": true, "data": { "data": {} } }, "store": { "cache": { "optimistic": [], "watches": [], "silenceBroadcast": false, "config": { "fragmentMatcher": {}, "addTypename": true }, "addTypename": true, "data": { "data": {} } } }, "disableNetworkFetches": false, "queryDeduplication": true, "ssrMode": false, "version": "2.2.5" }


        // const wrapper = shallow(<CreateReport match={myMatch} client={myClient} />)

        expect(wrapper.find(CreateReport))

        // expect(
        //     wrapper.containsMatchingElement(
        //         <h3>{wrapper.state('linkDescription')} <br /> {wrapper.state('linkUrl')}</h3>
        //     )
        // ).toBeTruthy()

        //try to use something like this wrapper.find('a').props().onClick(new MouseEvent('click')); instead of wrapper.find('a').simulate('click');.In my tests I found that simulate doesn't work.


    })

})
