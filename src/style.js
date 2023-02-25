import styled from 'styled-components'

export const mainColor = "#783dff"
export const secondaryColor = "#240f55"
export const thirdColor = "#ececec"
export const fourthColor = "#ffffff"
export const fifthColor = "#cbb5ff"
export const borderRadius = "5px"


export const Navbar = styled.div`
display:flex;
justify-content:space-around;
height:80px;
align-items:center;


h1{
    color: ${mainColor};
}

div{

    color:${mainColor};
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    transition: 0.25s;
    :hover{
        color: ${secondaryColor};
    }

    button{
        padding: 15px;
        border-radius:${borderRadius};
        background-color: ${fourthColor};
	color: ${mainColor};
	border: none;
	padding: 20;
	font: inherit;
    transition: 0.25s;
    :hover{
        background-color: ${secondaryColor};
        color: ${fourthColor};
    }
    }
}

`

export const Searchbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
background:${thirdColor};

input{
    all: unset;
    background-color: ${fourthColor};
    height: 40px;
    width: 100%;
}
div{
  display: flex;
    border-radius: ${borderRadius};
    padding: 5px;
    display: flex;
    width: 700px;
    align-items: center;
    justify-content: center;
    background-color: ${fourthColor};
}
@media (max-width: 768px) {
    div{
      width:85%
    }
  }

`
export const IconicButton = styled.button`
        padding: 15px;
        border-radius:${borderRadius};
        background-color: ${fourthColor};
	color: ${mainColor};
	border: none;
	padding: 20;
	font: inherit;
    transition: 0.25s;
    :hover{
        background-color: ${secondaryColor};
        color: ${fourthColor};
    }


`
export const SubmitButton = styled.button`
        padding: 15px;
        width:100px;
        margin-left:37%;
        margin-bottom:30px;
        border-radius:${borderRadius};
        background-color: ${fifthColor};
	color: ${mainColor};
	border: none;
	padding: 20;
	font: inherit;
    transition: 0.25s;
    :hover{
        background-color: ${secondaryColor};
        color: ${fourthColor};
    }


`
export const CategoriesCont = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
text-align: center;
width: 70%;
margin: auto;
@media (max-width: 768px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 590px) {
    grid-template-columns: auto auto;
  }

div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    div{
        :hover{
        color: ${mainColor}
    }
    }

    

    span{
        padding-left: 5px;
    }
}
        

`
export const Title = styled.h2`
margin: auto;
text-align: center;
margin: 20px;

`


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
  span:hover {background-color: ${fifthColor};}

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
background:${thirdColor};
div{
  display: flex;
  justify-content: center;
  align-items: center;
}
input{
    all: unset;
    background-color: ${fourthColor};
    height: 20px;
    width: 30%;
    padding: 5px;
    margin: 5px;
    border-radius: ${borderRadius};
}


`

export const LoginForm = styled.div`
width: 400px;
height: 600px;
background-color: ${fourthColor};
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
  background-color: ${thirdColor};
  border-radius: ${borderRadius};
  width: 95%;
  padding:8px;
  margin-bottom: 20px;

}




`

export const Result = styled.div`
margin: 0 auto;
margin-top:10px;
width: 1000px;
max-height: 70vh;
background-color: ${thirdColor};
overflow: scroll;
overflow-x: hidden;
margin-bottom: 100px;
@media (max-width: 1000px) {
    width: 95%;
  }

  border-radius: ${borderRadius};

`

export const Item = styled.div`
display: flex;
align-items: center;
width: 98%;
height: 200px;
background-color: white;
margin: 10px;


img{
  float: left;
  height: 180px;
  width: 180px;
  object-fit: cover;
  margin: 10px;

}

h1{
  margin: 0 auto;
}



`

export const LeftTitle = styled.div`
float: left;
font-size: 1.2rem;
width: 400px;
    @media (max-width: 1000px) {
    float: none;
    width: 100%;

    
  }

`

export const TitleContainer = styled.div`
position: relative;
  height: 180px;

  padding: 10px;
`
export const RightPrice = styled.div`
font-weight: 700;
padding: 10px;
width: 15px;
    margin-left: auto;
    flex: 0.2;
    @media (max-width: 400px) {
      display: none;
   
  }

`
export const ImageTitle = styled.div`
display: flex;
width: 100%;




`
export const DateTime = styled.div`
    position: absolute;
    bottom: 0;
    left: 10px;
`
export const ListingCont = styled.div`
margin:0 auto;
width 500px;
height:730px;
background-color:${fourthColor};

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
  background-color: ${thirdColor};
  border-radius: ${borderRadius};
  width: 95%;
  padding:8px;
  margin-bottom: 20px;

}





`
export const ListingCont2 = styled.div`
margin:0 auto;
width 80%;
height:760px;
background-color:${thirdColor};

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
  background-color: ${fourthColor};
  border-radius: ${borderRadius};
  width: 60%;
  padding:5px;
  
  

}





`


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
  span:hover {background-color: ${fifthColor};}

  span{
    color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  }
  
}
`


