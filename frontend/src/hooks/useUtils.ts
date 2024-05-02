import { useSelector, useDispatch } from "react-redux";
import  { UserLogin } from "../types/TypesUtils";
import { unsetLogin } from "../reducers/userLogin/UserLoginSlice"
import { useNavigate } from "react-router-dom";





export const useUtils = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state:UserLogin) => state.userLogin);



  const checkLogin = ()=> {
    if(login.id < 1 || login.username === "") {
      dispatch(unsetLogin());
      navigate("/");
    }
  }
  return {
    checkLogin
  }
}