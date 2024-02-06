import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from "@/types/types";
import { useState } from "react";
import { DecryptData } from '@/lib/utils/DecryptData';
import { NewCompany } from "../FetchApi/NewCompany";
 
export function DialogCompany() {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const id_admin: string = DecryptData(localStorage.getItem('Unix')!) 
  const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
    try {
      NewCompany({
        name: name,
        document: document,
        email: email.toLocaleLowerCase(),
        logo: logo,
        phone: phone,
        description: description,
        id_admin: id_admin

        
      }).then(async (response) => {
        switch (response) {
          case 0:
            alert('Se creo El Bethoveen')
            break;
          case 1:
            alert('Naranja')
            break;
        }
      })
    } catch (error) {
      
    }
  
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:bg-white dark:text-black bg-black text-white" variant="outline">New Company</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a New Company</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      <form className="mt-6" onSubmit={ handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input onChange={(e) => setName(e.target.value)} id="name"className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="document" className="text-right">
              Document
            </Label>
            <Input onChange={(e) => setDocument(e.target.value)} id="document" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email"className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="logo" className="text-right">
              Logo
            </Label>
            <Input onChange={(e) => setLogo(e.target.value)} id="logo"className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input onChange={(e) => setPhone(e.target.value)}  id="phone"className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input onChange={(e) => setDescription(e.target.value)} id="description"className="col-span-3" />
          </div>
        </div>
   
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
      </DialogContent>
    </Dialog>
  )
}