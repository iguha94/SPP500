import * as React from "react"
import {shallow} from 'enzyme';
import { Registration } from "../src/renderer/components/Registration";

it('renders a registration-container classed component', () => {
	const wrapper = shallow(<Registration/>);
	expect(wrapper.find('.registration-container')).toExist();
});