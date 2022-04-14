import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
     heroes : string[]=['SpiderMan','AironMan','Efra','Tang Long','Temerarios'];
     borrado: string ='';

     borrarHeroe(){
         
         
         //this.heroes=['SpiderMan','Efra','Tang Long','Temerarios'];
         //this.heroes.shift();
         this.borrado=this.heroes.shift()||' ';
       
         //console.log(heroeBorrado);

     }

   
  
}
