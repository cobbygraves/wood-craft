import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEvent } from 'react'
import { sendContactForm } from '@/lib/utils'

interface Props {
  productName: string | undefined
  image: string | undefined
}

export function UserFormDialog({ productName, image }: Props) {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [isNameError, setIsNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [isEmailError, setIsEmailError] = useState(false)
  const [phone, setPhone] = useState('')
  const [isPhoneError, setIsPhoneError] = useState(false)
  const [location, setLocation] = useState('')
  const [isLocationError, setIsLocationError] = useState(false)

  const handleUserInformation = () => {
    if (!name) {
      setIsNameError(true)
      return
    } else if (!email) {
      setIsEmailError(true)
      return
    } else if (!phone) {
      setIsPhoneError(true)
      return
    } else if (!location) {
      setIsLocationError(true)
      return
    }

    sendContactForm({
      name,
      email,
      phone,
      location,
      product: productName ?? '',
      image: image ?? ''
    })

    setShowForm(false)
    setName('')
    setEmail('')
    setPhone('')
    setLocation('')
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNameError) {
      setIsNameError(false)
    }
    setName(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isEmailError) {
      setIsEmailError(false)
    }
    setEmail(e.target.value)
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isPhoneError) {
      setIsPhoneError(false)
    }
    setPhone(e.target.value)
  }

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isLocationError) {
      setIsLocationError(false)
    }
    setLocation(e.target.value)
  }

  const handleFormChange = (open: boolean) => {
    setShowForm(open)
  }

  const handleCancel = () => {
    setShowForm(false)
    setName('')
    setIsNameError(false)
    setEmail('')
    setIsEmailError(false)
    setPhone('')
    setIsPhoneError(false)
    setLocation('')
    setIsLocationError(false)
  }

  return (
    <Dialog open={showForm} modal={showForm} onOpenChange={handleFormChange}>
      <form>
        <DialogTrigger asChild>
          <Button
            variant='default'
            className='bg-[var(--primary-color)] text-white h-12 px-4 hover:bg-[var(--secondary-color)] cursor-pointer text-xl rounded-none'
          >
            Request Quote
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Request A Quote</DialogTitle>
            <DialogDescription>
              Provide your information. Click send when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4'>
            <div className='grid gap-3'>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='Pedro Duarte'
                value={name}
                onChange={handleNameChange}
              />
              {isNameError && (
                <small className='text-red-500'>Name cannot be empty</small>
              )}
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='@peduarte'
                value={email}
                onChange={handleEmailChange}
              />
              {isEmailError && (
                <small className='text-red-500'>Email cannot be empty</small>
              )}
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input
                type='text'
                id='phone'
                name='phone'
                placeholder='eg. 0206849484'
                value={phone}
                onChange={handlePhoneChange}
              />
              {isPhoneError && (
                <small className='text-red-500'>Phone cannot be empty</small>
              )}
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='location'>Location/Address</Label>
              <Input
                type='text'
                id='location'
                name='location'
                placeholder='eg. Assin Manso, along the Ajumako road'
                value={location}
                onChange={handleLocationChange}
              />
              {isLocationError && (
                <small className='text-red-500'>Location cannot be empty</small>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant='outline'
                className='rounded-none'
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              variant='default'
              className='bg-[var(--primary-color)]  hover:bg-[var(--secondary-color)] rounded-none'
              onClick={handleUserInformation}
            >
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
