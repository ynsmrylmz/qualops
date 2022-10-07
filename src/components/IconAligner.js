import React from 'react';

export default function IconAligner(props) {
  let className = 'icon-aligner';
  className = props.transparent
    ? className.concat(' transparent')
    : className;
  return <div className={className} {...props} />;
}
