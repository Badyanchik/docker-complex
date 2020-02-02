import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button, TextComponents } from 'app/components'
import { getSeenNumsRequest, getValuesRequest, sendNumber } from 'app/requestHelpers';


export const Fib = () => {
  const [seenNums, setSeenNums] = useState([]);
  const [values, setValues] = useState({});
  const [num, setNum] = useState('');
  const fetchData = async () => {
    const { data: seenNumsData } = await getSeenNumsRequest();
    const { data: valuesData } = await getValuesRequest();
    setSeenNums(seenNumsData);
    setValues(valuesData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const onChange = e => setNum(e.currentTarget.value);

  const handleSubmit = async () => {
    await sendNumber({ num, });
    fetchData();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your index:</Form.Label>
          <Form.Control onChange={onChange} name="fib" value={num} type="number" />
          <Button text="Submit" type="submit" variant="primary" />
        </Form.Group>
      </Form>
      <TextComponents.Title type="primary" text="Results I have seen" />
      <div>
        {seenNums.map(item => <div key={item.number}>{item.number}</div>)}
      </div>
      <TextComponents.Title type="primary" text="Calculated values" />
      <div>
        {Object.keys(values).map(item => <div key={item}>For number {item} I calculated {values[item]}</div>)}
      </div>
    </div>
  )
};
