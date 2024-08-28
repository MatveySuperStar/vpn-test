import dynamic from "next/dynamic";

const ModalPortal = dynamic(() => import("./ModalPortal"), { ssr: false });

export default ModalPortal;
