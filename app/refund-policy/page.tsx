import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Refund Policy - ResumeIQ',
  description: 'Refund policy for ResumeIQ AI resume analyzer service',
};

export default function RefundPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Refund Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. General Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                ResumeIQ offers a one-time AI resume analysis service for ₹20. Due to the instant digital nature of the service, 
                refunds are generally not available once the analysis has been delivered to your email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Refund Eligibility</h2>
              <p className="text-gray-300 leading-relaxed mb-3">You may be eligible for a full refund in the following cases:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>
                  <strong>Payment debited but analysis not received:</strong> If payment was successful but you did not receive 
                  your analysis within 24 hours and it's not in your spam folder
                </li>
                <li>
                  <strong>Technical error:</strong> If our system failed to process your resume due to a technical issue on our end 
                  (server error, parsing failure, etc.)
                </li>
                <li>
                  <strong>Duplicate payment:</strong> If you were charged multiple times for the same transaction due to a system error
                </li>
                <li>
                  <strong>Service not as described:</strong> If the delivered analysis is blank, corrupted, or significantly incomplete 
                  (missing all major sections)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Non-Refundable Situations</h2>
              <p className="text-gray-300 leading-relaxed mb-3">Refunds will NOT be provided for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Change of mind after receiving the analysis report</li>
                <li>Dissatisfaction with AI suggestions or recommendations (subjective feedback)</li>
                <li>User error in uploading the wrong resume file</li>
                <li>Failure to check email inbox or spam folder for delivery</li>
                <li>Disagreement with ATS scores or career advice provided</li>
                <li>Requests made more than 7 days after the transaction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. How to Request a Refund</h2>
              <p className="text-gray-300 leading-relaxed mb-3">To request a refund, follow these steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Email <a href="mailto:support@resumeiq.com" className="text-blue-400 hover:text-blue-300">support@resumeiq.com</a> with the subject line "Refund Request"</li>
                <li>Include your PayU transaction ID (found in payment confirmation)</li>
                <li>Provide the email address used for payment</li>
                <li>Clearly state the reason for your refund request</li>
                <li>Attach screenshots if applicable (error messages, payment proof, etc.)</li>
              </ol>
              <p className="text-gray-300 leading-relaxed mt-3">
                We will review your request within <strong>2 business days</strong> and notify you of our decision via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Refund Processing Timeline</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                If your refund is approved, it will be processed to the original payment method within <strong>5-7 business days</strong> 
                as per RBI guidelines and PayU processing times.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <h3 className="font-semibold mb-2 text-blue-400">Payment Gateway Refund Timelines:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  <li><strong>UPI refunds:</strong> 2-7 business days</li>
                  <li><strong>Credit/Debit card refunds:</strong> 3-10 business days</li>
                  <li><strong>Wallet refunds:</strong> Often instant, up to 3 days</li>
                  <li><strong>Net banking:</strong> 5-7 business days</li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mt-3">
                <strong>Note:</strong> Refund timelines depend on your bank or payment provider and are outside our control 
                after we initiate the refund from our end.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Failed Transactions</h2>
              <p className="text-gray-300 leading-relaxed">
                If your payment failed but the amount was debited from your account, it will be automatically reversed by your 
                bank within <strong>5-7 business days</strong> as per RBI guidelines. If the amount is not reversed after 7 days, 
                please contact us with your transaction details and bank statement screenshot.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Partial Refunds</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not offer partial refunds. If eligible, you will receive a full refund of ₹20. Service fees, 
                if any, charged by PayU or your bank are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact for Refund Queries</h2>
              <p className="text-gray-300 leading-relaxed">
                For any questions or concerns regarding refunds:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3">
                <p className="text-gray-300">
                  <strong>Email:</strong> <a href="mailto:support@resumeiq.com" className="text-blue-400 hover:text-blue-300">support@resumeiq.com</a>
                  <br />
                  <strong>Response Time:</strong> Within 48 hours (business days)
                  <br />
                  <strong>Support Hours:</strong> Monday - Saturday, 10 AM - 6 PM IST
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
