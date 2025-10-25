import { useEffect, useState } from "react";
import FirstComponent from './FirstComponent';
import axios from "axios";
import api from "../api/base";
import authHeader from "../api/authHeader";
import { getAllUsers } from "../services/userServices";

export function SecondComponent() {


  const [users, setUsers] = useState([])
  const [err, setErr] = useState("")
  const [loader, setLoader] = useState<boolean>(false)

  useEffect(() => {

    getAllUsers()
      .then(res => {
          setUsers(res)
        
        // setLoader(true)
        // setTimeout(() => {
        //   setLoader(false)
        //   setUsers(res)
        // }, 1500);
        
      }).catch(err => {
        setErr(err)
      })

      
  }, [])

  return (
    <>

      <div className="col-10 mx-auto text-center">
        <h2>Ma liste tableau Objets </h2>

        {loader && <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>}
        {err && <h3 className="text-danger">Erreur de chargemet des données</h3>}

        <table className="table table-striped">
          <thead className="bg-dark text-white">
            <th>#Id</th>
            <th>Name</th>
            <th>UserName</th>
          </thead>
          <tbody >
            {users?.map((user: any) => (

              <tr key={user._id}>
                <td> {user._id} </td>
                <td> {user.firstname} </td>
                <td> {user.lastname} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>

  );
}


