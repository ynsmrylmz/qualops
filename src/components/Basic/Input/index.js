import { Input as AntInput } from 'antd';
import classNames from 'classnames';

function Input(props) {    
    const classnames = classNames({
        ...props.className, 
        "qua-input" : true
    });
  return <AntInput {...props} className={classnames}/>
}


Input.Password = AntInput.Password;

export default Input;
