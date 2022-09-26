import { Button as AntButton } from 'antd';
import classNames from 'classnames';

export default function Button(props) {
    const classnames = classNames({
        ...props.className, 
        "qua-button" : true
    });
    return <AntButton {...props} shape="round" className={classnames} />
}