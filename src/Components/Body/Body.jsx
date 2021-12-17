import React from 'react'
import Image from '../Images/Image'
import Button from '../Button/Button'
import Input from './Input/Input'
import '../Button/Button'
import './Body.css'

export default function Body() {
    return (
        <div className="whole-body">
            <div className="left-comp">
                <div class="lc-first">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltPMGDF7UGsme8WBuFxEwG8H-Ys4nW7TbOBFXG4H36Q11Ccbmc0tvVK_RU4N9-EI2GQ&usqp=CAU" 
                        cls="swiggy_logo"
                    />
                        <div class="main_btn">
                            <Button
                                cls = "login_btn"
                                btn = "Login"
                            />
                            <Button
                                cls = "sign_btn"
                                btn = "Sign UP"
                            />
                        </div>

                </div>
                    <div className="main-header">
                        <h1>Hungry?</h1>
                        <p>Order food from favourite restaurants near you.</p>
                    </div>

                <Input/>
            </div>

            <div className="right-comp">
                <Image
                src='https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq'
                cls= "main_img"
                />

            </div>

         
        </div>
    )
}
