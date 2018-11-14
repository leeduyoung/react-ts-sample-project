import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ReactUtil } from './utils/ReactUtil';
import { MobileMainPage } from './mobile/pages/MobileMainPage';
import { MainPage } from './desktop/pages/MainPage';

export class App extends React.Component
{
	public render(): JSX.Element
	{
        const is_mobile: boolean = ReactUtil.is_mobile();

		return (
            is_mobile
                ? <MobileMainPage />
                : <MainPage />
        )
	}
}

export namespace App
{
    export interface IProps{}

    export function main(): void
    {
        ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
    }
}

window.onload = App.main;