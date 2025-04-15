import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavLink } from "react-router"

const RegisterPage = () => {
  return (
    <Card className="w-[400px] mx-auto mt-20 p-6">
    <CardHeader>
      <CardTitle className="text-2xl">Sign Up</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="flex flex-col gap-6">
        <div className="grid gap-2">
            <Label htmlFor="email">Name</Label>
            <input
              id="email"
              type="text"
              placeholder="your name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            SignUp with Github
          </Button>
        </div>
        

        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <NavLink to="/login" className="underline underline-offset-4">
            Sign in
          </NavLink>
         
        </div>
      </form>
    </CardContent>
  </Card>
  )
}

export default RegisterPage;
