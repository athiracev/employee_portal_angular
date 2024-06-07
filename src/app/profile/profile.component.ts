import { Component } from '@angular/core';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profilePicture:String="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"

  profileStatus:any=false
  onStatus(){
    this.profileStatus=!this.profileStatus
  }


  getFile(event:any){
    const file=event.target.files[0]
    let fr=new FileReader()
    fr.onload=(event:any)=>{
      console.log(event.target.result)
      this.profilePicture=event.target.result
      this.adminDetails.profile=event.target.result
    }
  }

  handleSubmit(){
    console.log(this.adminDetails)
  }
}
