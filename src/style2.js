import styled from 'styled-components';

export const mainColor = "#d6d6d6";
export const secondaryColor = "#0f2d55";
export const thirdColor = "#707070";
export const fourthColor = "#d47800";
export const fifthColor = "#b5c0ff";
export const sixthColor = "#ff9900";
export const seventhColor = "#15427c";
export const borderRadius = "5px";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color:${secondaryColor};
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }

  h1 {
    color: ${mainColor};
  }

  div {
    color: ${mainColor};
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    transition: 0.25s;

    

    button {
      padding: 15px;
      border-radius: ${borderRadius};
      background-color: ${fourthColor};
      color: ${mainColor};
      border: none;
      font: inherit;
      transition: 0.25s;

      :hover {
        background-color: ${sixthColor};
        color: ${mainColor};
      }
    }
  }
`;

export const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: ${mainColor};

  input {
    all: unset;
    background: ${mainColor};
    height: 40px;
    width: 100%;
    border:1px solid ${thirdColor};
    border-radius:${borderRadius};
  }

  div {
    display: flex;
    border-radius: ${borderRadius};
    padding: 5px;
    width: 700px;
    align-items: center;
    justify-content: center;
    background: ${mainColor};
  }

  @media (max-width: 768px) {
    div {
      max-width: 85%;
    }
  }
`;

export const IconicButton = styled.button`
  padding: 15px 20px;
  border-radius: ${borderRadius};
  background-color: ${secondaryColor};
  color: ${mainColor};
  border: none;
  font: inherit;
  transition: 0.25s;
  cursor: pointer;
  margin:10px;

  :hover {
    background-color: ${seventhColor};
    
  }
`;
export const SubmitButton = styled.button`
        padding: 15px;
        width:100px;
        margin-left:37%;
        margin-bottom:30px;
        border-radius:${borderRadius};
        background-color: ${secondaryColor};
	color: ${mainColor};
	border: none;
	padding: 20;
	font: inherit;
    transition: 0.25s;
    :hover{
        background-color: ${seventhColor};
    }
`

export const CategoriesCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  text-align: center;
  width: 70%;
  margin: auto;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 590px) {
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;

    &:hover {
      color: ${mainColor};
    }

    span {
      padding-left: 5px;
    }
  }
`;

export const Title = styled.h2`
  margin: 20px auto;
  text-align: center;
`;
export const DropdownCategories = styled.div`
position: relative;
display: inline block;
:hover div {display: block;}
button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  color: ${secondaryColor};
  padding: 16px;
  font-size: 16px;
  border: none;
}
@media (max-width: 768px) {
    button{
      width:100px
    }
    svg{
      display: none;
    }
  }
  div{
    display: none;
  position: absolute;
  margin-top: 640px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  span:hover {background-color: ${seventhColor};
  color:${mainColor}
}
  span{
    color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  }
  
}
`
export const Filter = styled.div`
  padding: 10px;
  color: ${secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${mainColor};

  div {
    justify-content: center;
    align-items: center;
  }

  input {
    all: unset;
    background-color: ${mainColor};
    border:1px solid ${thirdColor};
    height: 20px;
    width: auto;
    padding: 5px;
    margin: 5px;
    border-radius: ${borderRadius};
  }
`;

export const LoginForm = styled.div`
width: 400px;
height: 600px;
border:1px solid ${thirdColor};
margin: auto;
margin-top: 70px;
border-radius: ${borderRadius};
span{
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    text-align: center;
  }
}
  
div{
    width: 100%;
    padding: 5px;
    div{
   
    }
    
  }
input{
  all: unset;
  background-color: ${mainColor};
  border-radius: ${borderRadius};
  width: 95%;
  padding:8px;
  margin-bottom: 20px;
}
`

export const Result = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 1000px;
  padding: 25px;
  max-height: 70vh;
  background-color: ${mainColor};
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 100px;
  border-radius: ${borderRadius};

  @media (max-width: 1000px) {
    width: 95%;
  }

  scrollbar-width: thin;
  scrollbar-color: ${secondaryColor} ${thirdColor};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${secondaryColor};
    border-radius: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  height: 200px;
  background-color: ${mainColor};
  margin: 10px;
  border-radius: ${borderRadius};

  img {
    float: left;
    height: 180px;
    width: 180px;
    object-fit: cover;
    object-position: center;
    margin: 10px;
  }

  h1 {
    margin: 0 auto;
  }
`;

export const LeftTitle = styled.div`
  float: left;
  font-size: 1.2rem;
  width: 400px;

  @media (max-width: 1000px) {
    float: none;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  height: 180px;
  padding: 10px;
`;

export const RightPrice = styled.div`
  font-weight: 700;
  padding: 10px;
  width: 15px;
  margin-left: auto;
  flex: 0.2;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const ImageTitle = styled.div`
position:relative;
display: flex;
width: 100%;
`

export const DateTime = styled.div`
    position: absolute;
    bottom: 0;
    left:210px;
    
`

export const ListingCont = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 730px;
  border:1px solid ${thirdColor};
  padding:25px;
  margin: auto;
  margin-top: 70px;
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    all: unset;
    border:1px solid ${thirdColor};
    border-radius: ${borderRadius};
    width: 96%;
    padding: 8px;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const ListingCont2 = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 760px;
  color:${mainColor};
  margin: auto;
  margin-top: 70px;
  border-radius: ${borderRadius};
  display: flex;
  justify-content: center;
  align-items:center;
  
  gap: 20px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
    }
  }

  div{
    width: 100%;
    padding: 5px;
    div{
   
    }
    
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    all: unset;
    background-color: ${fourthColor};
    border-radius: ${borderRadius};
    width: 60%;
    padding: 5px;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const DropdownCategories2 = styled.div`
position: relative;
display: inline block;

:hover div {display: block;}
button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  color: ${secondaryColor};
  padding: 16px;
  font-size: 16px;
  border: none;
}
@media (max-width: 768px) {
    button{
      width:100px
    }
    svg{
      display: none;
    }
  }
  div{
    display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  span:hover {background-color: ${seventhColor};
  color:${mainColor}
}
  span{
    color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  }
  
}
`


