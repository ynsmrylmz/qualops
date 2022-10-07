import { Checkbox, Col, Input, Row } from 'antd';
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Aligner from '../../../../components/IconAligner';

function HeaderItem({ item, setter, remove, getRef }) {
  const keyRef = useRef();
  const valueRef = useRef();
  function setterHoc(key, value) {
    setter(item.index, key, value);
  }

  useEffect(() => {
    if (getRef && typeof getRef == 'function')
      getRef(keyRef, valueRef);
  }, []);

  return (
    <Row>
      {/* <Col xs={24} sm={15} md={4} lg={2}> */}
      <Col flex="40px">
        {item.active != undefined && (
          <Aligner transparent>
            <Checkbox
              checked={item.active}
              onClick={(e) => {
                setterHoc('active', !item.active);
              }}
            />
          </Aligner>
        )}
      </Col>
      {/* <Col xs={24} sm={15} md={4} lg={10}> */}
      <Col flex="auto">
        <Input
          value={item.key}
          size="large"
          onChange={(e) => setterHoc('key', e.target.value)}
          ref={keyRef}
        />
      </Col>
      {/* <Col xs={24} sm={15} md={4} lg={10}> */}
      <Col flex="auto">
        <Input
          value={item.value}
          size="large"
          onChange={(e) => setterHoc('value', e.target.value)}
          ref={valueRef}
        />
      </Col>
      {/* <Col xs={24} sm={15} md={4} lg={2}> */}
      <Col flex="40px">
        {remove && (
          <Aligner transparent onClick={(e) => remove(item.index)}>
            <DeleteIcon />
          </Aligner>
        )}
      </Col>
    </Row>
  );
}

export default function Params() {
  const init = useRef(false);
  const [items, setItems] = useState([
    {
      index: 0,
      active: true,
      key: 'Qualhussb-v1.0.0',
      value: 'Qualhub-v1.0.0',
    },
    {
      index: 1,
      active: true,
      key: 'Accept',
      value: '*/*',
    },
  ]);

  useEffect(() => {
    if (init.current) {
      const { key, index } = init.current;
      key == 'key'
        ? inputRefs[index].keyRef.current.focus()
        : inputRefs[index].valueRef.current.focus();
      init.current = false;
    }
  }, [items, init.current]);

  let inputRefs = [];

  function setter(index, key, value) {
    if (!items.find((q) => q.index == index)) {
      setItems([
        ...items,
        {
          index: index,
          key: '',
          value: '',
          active: false,
          [key]: value,
        },
      ]);
      init.current = { key, index };
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (item.index == index) return { ...item, [key]: value };
        return item;
      })
    );
  }

  function remove(index) {
    setItems((prev) => prev.filter((q) => q.index != index));
  }

  return (
    <>
      {items.map((item) => (
        <HeaderItem
          item={item}
          key={item.index}
          setter={setter}
          remove={remove}
          getRef={(keyRef, valueRef) =>
            (inputRefs[item.index] = { keyRef, valueRef })
          }
        />
      ))}{' '}
      <HeaderItem
        item={{ index: items.length }}
        key={items.length}
        setter={setter}
        getRef={(keyRef, valueRef) =>
          (inputRefs[items.length] = { keyRef, valueRef })
        }
      />
    </>
  );
}
