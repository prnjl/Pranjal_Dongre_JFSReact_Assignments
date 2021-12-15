let Order={
    id:1,
    title:"shoes",
    price:5000,

    printOrder:function () {
        console.log("Order details are ${this.id} \n ${this.title} \n {this.$price}");
    },
    getPrice:function () {
        console.log(`Price is: ${this.price}`);
        
    }

};

let myOrder=Object.assign({},Order)  //Object.assign it copy the all properties of given variable
console.log(myOrder);
console.log(myOrder.getPrice);