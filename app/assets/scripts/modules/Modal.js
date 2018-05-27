import $ from "jquery";

class Modal{
  constructor(){
    this.modalItself = $(".modal");
    this.openModal = $(".open-modal");
    this.closeModal = $(".modal--close-x");
    this.events();
  }

  events(){
    this.openModal.click(this.openModalFN.bind(this));
    this.closeModal.click(this.closeModalFN.bind(this));
    $(document).keyup(this.keyPress.bind(this));
  }

  keyPress(e){
    if(e.keyCode == "27"){
      return this.closeModalFN();
    }
  }

  openModalFN(){
    this.modalItself.addClass("modal--is-visible");
  }

  closeModalFN(){
    this.modalItself.removeClass("modal--is-visible");
  }
}

export default Modal;
