import * as ReactDOM from "react-dom";

export class ReactUtil
{
	public static get MAIN_DIV(): HTMLDivElement
	{
		return ReactUtil.get_element("main_div");
	}
	public static get MODAL_DIV(): HTMLDivElement
	{
		return ReactUtil.get_element("modal_div");
	}

	public static get_element<Elem extends HTMLElement>(id: string): Elem
	{
		return document.getElementById(id) as Elem;
	}
	public static get_input_value(id: string): string
	{
		let elem: HTMLInputElement = ReactUtil.get_element<HTMLInputElement>(id);
		return elem ? elem.value : "";
	}
}

export namespace ReactUtil
{
	export function render(element: JSX.Element, container: HTMLElement): Promise<void>
	{
		return new Promise(resolve =>
		{
			ReactDOM.render(element, container, resolve);
		});
	}

	export function refresh<Component extends React.Component>
		(component: Component): Promise<void>
	{
		return new Promise(resolve =>
		{
			component.setState({}, resolve);
		});
	}

	export function is_mobile(): boolean
	{
		if (is_mobile_ != null)
			return is_mobile_;

		let agent: string = navigator.userAgent;
		is_mobile_ = /Android/i.test(agent)
			|| /BlackBerry/i.test(agent)
			|| /iPhone|iPad|iPod/i.test(agent)
			|| /Opera Mini/i.test(agent)
			|| /IEMobile/i.test(agent);

		return is_mobile_;
	}

	export function is_ios(): boolean
    {
        if (is_ios_ != null)
            return is_ios_;

        let agent: string = navigator.userAgent;
        is_ios_ = /iPhone|iPad|iPod/i.test(agent);

		return is_ios_;            
    }

	export function close_modal(): Promise<void>
	{
		return ReactUtil.render(null, ReactUtil.MODAL_DIV);
	}

	var is_mobile_: boolean = null;
	var is_ios_: boolean = null;
}