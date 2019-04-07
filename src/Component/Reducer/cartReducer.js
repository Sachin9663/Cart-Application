const initialState={
    items: [
        {
            "id": "91c9f4a3-18e9-4263-8cd6-c649dabd7e51",
            "name": "Sauce - Hoisin",
            "quantity": 35,
            "image": "https://picsum.photos/200/200/?image=18",
            "price": 239
        },
        {
            "id": "830b40cb-1b66-4253-a388-bc55cef840da",
            "name": "Longos - Lasagna Beef",
            "quantity": 34,
            "image": "https://picsum.photos/200/200/?image=16",
            "price": 92
        }
    ],
    addedItems:[],
    total: 0

}

const cartReducer = (state = initialState,action)=>{

}

export default cartReducer;