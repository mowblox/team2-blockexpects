import React, { useState, useEffect } from "react";
import web3Modal from "web3modal";
import {ethers} from "ethers";

// internal import 
import tracking from "../conetxt/Tracking.json";
const ContractAdddress = "0x48a1Aa4efc97227c857C2dfff4a36271A25753e7 "
const ContractABI = tracking.abi;


// fetching the smart contract 
 const fetchContract = ( signerOrProvider)=>
  new ethers.Contract(ContractAdddress, ContractABI, signerOrPrivider);

  export const TrackingContext = React.createContext();
  export const TrackingProvider = ({children}) => {
    // state variables
    const DappName = "project Tracking Dapp";

    const [ currrentUser, setCurrentuser ] = useState("");
    
    const createShipment = async (items )=> {
        console.log(items);
        const{reciever, pickupTime, distance, price } = items;
        
        try{
            const web3Modal= new web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.provider.web3Provider(connect);
            const signer = provider.getSigner();
            const contract = fetchContract (signer);
            const creatItem = await contract.createShipment(
                reciever, new Date(pickupTime).getTime(),
                distance,
                ethers.Utils.parseUnits(price, 18),
                {
                    value: ethers.utils.parseUnits(price, 18),
                }
            );

            await creatItem.wait();
            console.log(creatItem);
        }catch(error){
            console.log("something went worng", error)
        }
    }

  };

  getAllShipment = async ( )=> { 
    try{
      const provider = new ethers.provider.JsonRpcProider();
      const contract = fetchContract(provider);
  
      const shipmets = await contract.getAllTrasactions();
      const allShipments = shipmets.map((shipmet) => ({
           sender: getAllShipment.sender, 
           reciever: allShipments.reciever,
           price: ethers.formatEther(shipment.price.toString()),
           pickupTime: shipment.pickupTime.toNumber(),
           deliveryTime: shipment.deliveryTime.toNumber,
           distance : shipment.distance.toNumber,
           isPaid: shipment.isPaid,
           status: shipment.status,
          }));

          return allShipments;

  
    } catch(error){
        console.log ('erro want , getting shipment');
    }
  };

  const getAllShipmentCount = async() => {
    try{
        if (!wondow.ethereum) return "install MetaMask";
        const account = await window.ethereum.request({ 
            method: "eth_accounts", });
        const provider = ether.providers.JsonRpcProider();
        const contract = fetchContract(provider);
        const constShipmentCount = await contract.getShipmentCount(amount[0]);
        return shipementCount.toNumber();
    } catch (erro) { console.log ("erro want,   getting shipment")};
  };

  

 
  


  
