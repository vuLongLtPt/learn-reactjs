import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

ToDoFeatures.propTypes = {

};

function ToDoFeatures(props) {

    const match = useRouteMatch();

    return (
        <div>
            Todo shared

            <Switch>
                <Route path={match.path} component={ ListPage } exact/>
                <Route path={`${match.path}/:todoId`} component={ DetailPage } exact/>

                <Route component={ NotFound } />
            </Switch>

        </div>
    );
}

export default ToDoFeatures;