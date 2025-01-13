import CabinTable from '../features/cabins/CabinTable';
import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import Button from './../ui/Button';
import CreateCabinForm from './../features/cabins/CreateCabinForm';

function Cabins() {
  useEffect(function() {
    getCabins().then(data => console.log(data))
  }, [])
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Sort / Filter</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((show) => !show)}>Add Cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
