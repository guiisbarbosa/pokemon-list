import { styled } from 'styled-components'

export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.secondaryBG};
    color: ${props => props.theme.mainText};

    main {
        min-height: calc(100vh - 160px);
        height: 100%;
        width: 68%;
        background-color: ${props => props.theme.primaryBG};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 68px;
    }

    h1 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 12px;
        text-align: center;
    }

    .displayCards {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }

    @media(max-width: 376px){
        main {
            width: 90%;
        }
    }
`

export const LoadButton = styled.button`
    width: 200px;
    height: 60px;
    background-color: #39B54A;
    color: #B2FFBC;
    border: 2px solid #000;
    border-radius: 8px;
    font-size: 16px;
    box-shadow: #000 1px 1px;
    cursor: pointer;
    
    &:disabled {
        cursor: not-allowed;
    }

    &:hover{
        transform: translate(1px, 1px);
        background-color: #37A646;
        color: #A3E9AC;
        box-shadow: none;
    }
`

export const Loader = styled.div`
    width: 44.8px;
    height: 44.8px;
    color: #ED0001;
    position: relative;
    background: radial-gradient(11.2px,currentColor 94%,#0000);
    margin-top: 12px;


    &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(10.08px at bottom right,#0000 94%,currentColor) top    left,
            radial-gradient(10.08px at bottom left ,#0000 94%,currentColor) top    right,
            radial-gradient(10.08px at top    right,#0000 94%,currentColor) bottom left,
            radial-gradient(10.08px at top    left ,#0000 94%,currentColor) bottom right;
    background-size: 22.4px 22.4px;
    background-repeat: no-repeat;
    animation: loader 1.5s infinite cubic-bezier(0.3,1,0,1);
    }

    @keyframes loader {
    33% {
        inset: -11.2px;
        transform: rotate(0deg);
    }

    66% {
        inset: -11.2px;
        transform: rotate(90deg);
    }

    100% {
        inset: 0;
        transform: rotate(90deg);
    }
    }
    `