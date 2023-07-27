import { User } from 'next-auth'
import { FC } from 'react'

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({}) => {
  return <div>UserAccountNav</div>
}

export default UserAccountNav