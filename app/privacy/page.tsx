import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - ResumeIQ',
  description: 'Privacy policy for ResumeIQ AI resume analyzer service',
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                ResumeIQ ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, store, and protect your personal information when you use our AI resume analysis service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li><strong>Email address:</strong> Required for sending analysis reports</li>
                <li><strong>Resume file:</strong> PDF or DOCX document you upload for analysis</li>
                <li><strong>Payment information:</strong> Processed by PayU (we do not store card details)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Page views and navigation patterns</li>
                <li>Transaction timestamps</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Process your resume and generate AI analysis</li>
                <li>Send analysis reports to your email</li>
                <li>Process payments via PayU gateway</li>
                <li>Provide customer support</li>
                <li>Improve our AI models and service quality</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/SSL) and at rest</li>
                <li><strong>Storage duration:</strong> Resume files and analysis are automatically deleted after 30 days</li>
                <li><strong>Server location:</strong> Data stored on secure cloud servers (Vercel/AWS)</li>
                <li><strong>Access control:</strong> Only authorized personnel can access data for support purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Third Parties</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We share your data only with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>PayU:</strong> For payment processing (governed by their privacy policy)</li>
                <li><strong>AI providers:</strong> Resume text sent to OpenAI/Groq APIs for analysis (anonymized)</li>
                <li><strong>Email service:</strong> For sending analysis reports</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                We do NOT sell, rent, or share your personal information with marketers or advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Access:</strong> Request a copy of your data</li>
                <li><strong>Deletion:</strong> Request deletion of your data before the 30-day auto-delete</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from promotional emails (if we send any in the future)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                To exercise these rights, email us at <a href="mailto:support@resumeiq.com" className="text-blue-400 hover:text-blue-300">support@resumeiq.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                We use minimal cookies for essential functionality (session management). We do not use third-party advertising 
                cookies or tracking pixels. Analytics (if implemented) will be anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our service is not intended for users under 18 years of age. We do not knowingly collect data from minors. 
                If you believe we have inadvertently collected such data, please contact us for immediate deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your data may be processed on servers located outside India (e.g., AWS regions, OpenAI infrastructure). 
                We ensure these transfers comply with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. 
                Continued use of the service after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                For privacy-related questions or concerns:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3">
                <p className="text-gray-300">
                  <strong>Email:</strong> <a href="mailto:support@resumeiq.com" className="text-blue-400 hover:text-blue-300">support@resumeiq.com</a>
                  <br />
                  <strong>Address:</strong> Chennai, Tamil Nadu, India
                </p>
              </div>
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
