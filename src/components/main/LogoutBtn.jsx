import { logout } from '@/lib/actions'
import React from 'react'
import { Button } from '../ui/button'

const LogoutBtn = () => {
  return (
    <form action={logout}>
        <button type="submit" >Logout </button>
    </form>
  )
}

export default LogoutBtn