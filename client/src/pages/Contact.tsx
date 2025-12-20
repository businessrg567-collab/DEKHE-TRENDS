import { LeadForm } from "@/components/LeadForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-5xl font-bold font-display mb-8">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have a question about our services or want to discuss a partnership? We're all ears.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@trendintel.agency</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Dr, Suite 400<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 012-3456</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold font-display mb-6">Send a Message</h2>
            <LeadForm type="contact" />
          </div>

        </div>
      </div>
    </div>
  );
}
