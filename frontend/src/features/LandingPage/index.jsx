import React, {Component} from 'react';

import * as styles from './index.scss';

class Index extends Component {
    render() {
        return (
            <div className={styles.cover} style={{ minHeight: '100%' }}>
                hello image
            </div>
        );
    }
}

export default Index;
