import { Root } from '@newfold/ui-component-library';
import { Welcome } from '@App/components';
import './app.css';

const App = () => {
    return (
        <div id="nfdui-app">
            <Root>
                <Welcome />
            </Root>
        </div>
    );
}

export default App;
