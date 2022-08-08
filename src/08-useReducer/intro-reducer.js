const initialState= [{
    id:1,
    todo:'recolectar la piedra del alma',
    done:false,
}]

const todoReducer = (state=initialState ,action) =>{

    return state;
}


let todos =todoReducer()

console.log(todos)