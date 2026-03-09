import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions - ResumeIQ',
  description: 'Terms and Conditions for using ResumeIQ AI resume analyzer service',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="glass rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using ResumeIQ ("the Service"), you accept and agree to be bound by these Terms & Conditions. 
                If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-gray-300 leading-relaxed">
                ResumeIQ is an AI-powered resume analysis tool that provides feedback, LinkedIn optimization suggestions, 
                cover letter templates, and career roadmap recommendations. The Service is provided on a one-time payment basis 
                of ₹20 per analysis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>You must provide a valid email address</li>
                <li>You must upload only your own resume or have permission to upload the document</li>
                <li>You are responsible for the accuracy of information provided</li>
                <li>You agree not to misuse the Service or attempt to reverse-engineer our technology</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>All payments are processed via PayU payment gateway</li>
                <li>The one-time fee of ₹20 is non-refundable except as stated in our Refund Policy</li>
                <li>We do not store your payment card details</li>
                <li>Payment must be completed before analysis is provided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>All AI-generated content (reports, suggestions, cover letters) is provided for your personal use</li>
                <li>You retain ownership of your uploaded resume</li>
                <li>ResumeIQ retains rights to the analysis framework, software, and algorithms</li>
                <li>You may not resell or redistribute the AI-generated content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Privacy</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>We collect and store your email and uploaded resume temporarily for analysis purposes</li>
                <li>All data is encrypted in transit and at rest</li>
                <li>Resume files and analysis results are automatically deleted after 30 days</li>
                <li>You may request earlier deletion by contacting support</li>
                <li>See our Privacy Policy for complete details on data handling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Disclaimer and Limitation of Liability</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>The Service is provided "as is" without warranties of any kind, express or implied</li>
                <li>ResumeIQ is not responsible for hiring outcomes or decisions based on AI suggestions</li>
                <li>We do not guarantee job placement, interview calls, or specific career results</li>
                <li>Our liability is limited to the amount paid (₹20) for the Service</li>
                <li>AI suggestions are recommendations only and should be reviewed by the user</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive for 99% uptime, we do not guarantee uninterrupted access to the Service. 
                Maintenance windows and technical issues may temporarily affect availability. We are not liable for 
                any losses resulting from service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Prohibited Uses</h2>
              <p className="text-gray-300 leading-relaxed mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Upload malicious files or content that violates laws</li>
                <li>Attempt to bypass payment systems or abuse refund policies</li>
                <li>Use automated systems to spam or abuse the Service</li>
                <li>Impersonate others or provide false information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated 
                "Last Modified" date. Continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes arising from the use of this Service will be 
                subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms, please contact us at:
                <br />
                <a href="mailto:support@resumeiq.com" className="text-blue-400 hover:text-blue-300">
                  support@resumeiq.com
                </a>
              </p>
            </section>

            <div className="text-center text-gray-400 pt-8 border-t border-white/10">
              <p>Last updated: March 9, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
