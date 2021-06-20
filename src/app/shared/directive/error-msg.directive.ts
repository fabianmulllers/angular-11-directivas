import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  private _mensaje: string = 'campo requerido asdasd';
  private _color : string = 'red';

  // @Input color: string = "red"
  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  }
  
  // @Input mensaje: string = "campo requerido";
  @Input() set mensaje(valor: string ){
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean ){
    if(!valor){
      this.el.nativeElement.classList.add('hidden');
    }else{
      this.el.nativeElement.classList.remove('hidden');
    }
  }

  get mensaje(){
    return this._mensaje
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) { 

    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClase();
  }
  
  setClase(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
    // this.htmlElement.nativeElement.style.color = valor;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

  
}
