 // SPX-License-Identifier: MIT -unlicensed
 pragma solidity ^0.8.0;
 contract Tracking {

    // tracking process 
        // enum ShipmentStatus { PENDING, IN_TRANSIT, DELIVERED}

    // declaring all the variables to be use in the project 
        //struct Shipment {
        //    address sender;
        //   address reciever;
        //  uint256 pickupTime;
        //  uint256 deliveryTime;
      //   uint256 distance;
      //  uint256 price;
       // ShipmentStatus status;
       // bool isPaid;
    function CreateShipment( address _reciever, uint256 _pickupTime, uint256 _distance,
      uint256 _price ) public  payable{


        // implementation of logic goes here

        // here a user create a shipment or buy a product 
     function StartShipment(address _sender, address _reciever, uint256 _index ) public{
     }
        // the product is package and shipment starts
     function TrackingShipment(address _sender, address _reciever, uint256 _index ) public{
     // information about the shipping is tracked
     
     }
     function CompleteShipment(address _sender, address _reciever, uint256 _index) public {
     // the prduct get to the user hence shipment completed

     }

    function getShipment (address _sender, uint256 _index) public view returns( address, address , uint256, uint256, uint256,   uint256, ShipmentStatus, bool ){
    // customer or users receives products
    }

    function getShipmentCount(address _sender) public view returns(uint256){
    // customers or users are able to findout the number of shipment created 

    }

     function getAllTransactions()
        public
        view
        returns(TyepShipment[] memory)
        {
        // customer make payment 
        }

       };