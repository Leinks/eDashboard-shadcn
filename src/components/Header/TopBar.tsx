
import { ModeToggle } from '../Theme/ToggleButton'
import { MainNav } from './MainNav'
import { Search } from './Search'
import { UserNav } from './UserNav'

export function TopBar() {
  return (
    <div>
        <div className="border-b sticky top-0">
          <div className="flex h-16 items-center px-4">
            <div className="ml-auto flex items-center space-x-4">
            <MainNav className="mx-6" />
              <Search />
              <ModeToggle/> 
              <UserNav />
            </div>
          </div>
        </div>
    </div>
  )
}
