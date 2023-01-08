import NextAuth from "next-auth"
import facebook from 'next-auth/providers/facebook'
import google from 'next-auth/providers/google'

export const authOptions = {  
    // Configure one or more authentication providers  
    providers: [    
        facebook({      
            clientId: process.env.FACEBOOK_CLIENT_ID,      
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,    
        }),    
        // ...add more providers here  ],}export default NextAuth(authOptions)  
        google({      
            clientId: process.env.FACEBOOK_CLIENT_ID,      
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,    
        }),
    ],
}
    
export default NextAuth(authOptions)