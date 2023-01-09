import styled from 'styled-components';

export const CheckOutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
justify-content: space-between;
`

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
`

export const Img = styled.img`
width: 100%;
height: 100%;
`

export const PropsContainer = styled.span`
width: 23%;
`
export const Quantity = styled(PropsContainer)`
display: flex;
width: 16.5%;

.arrow {
       cursor: pointer;
     }
     .value {
       margin: 0 10px;
     }

`
export const ButtonCheckOut = styled.button`
background-color: transparent;
border: none;
`
export const RemoveBtn = styled(CheckOutItemContainer)`
padding-left: 12px;
cursor: pointer;
border: none;
`
// .checkout-item-container {
//   width: 100%;
//   display: flex;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;
//   justify-content: space-between;

//   .image-container {
    // width: 23%;
    // padding-right: 15px;

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .name,
//   .quantity,
//   .price {
//     width: 23%;
//   }

//   .quantity {
//     display: flex;

//     .arrow {
//       cursor: pointer;
//     }

//     .value {
//       margin: 0 10px;
//     }
//   }

//   .remove-button {
    // padding-left: 12px;
    // cursor: pointer;
//   }
// }

// button {
//   background-color: transparent;
//   border: none;
// }