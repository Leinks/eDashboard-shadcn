
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { FormEvent } from "@/types/types";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NewCompany } from "../FetchApi/NewCompany";
import { DecryptData } from '@/lib/utils/DecryptData';
 
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
            console.log('Create Company',response)
            // alert('Se creo El Bethoveen')
            break;
          case 1:
            // alert('Naranja')
            console.log('Create Company',response)
            break;
        }
      })
    } catch (e: unknown) {
      console.info(e)
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
            Make a new company here. Click save when you're done.
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
          <DialogClose asChild>
          <Button type="submit">Save changes</Button>
          </DialogClose>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}

        </DialogFooter>
      </form>
      </DialogContent>
    </Dialog>
  )
}