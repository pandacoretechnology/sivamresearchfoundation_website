'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';

export default function DonationContent() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');

  const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log(api_url)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    anonymous: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  const [recentDonations, setRecentDonations] = useState([]);

  // Load Razorpay script & Fetch recent donations ticker
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    fetchRecentDonations();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const fetchRecentDonations = async () => {
    try {
      const res = await fetch(`${api_url}api/donations/get-recent.php`);
      const data = await res.json();
      if (data.success) {
        setRecentDonations(data.donations);
      }
    } catch (err) {
      console.error('Failed to fetch recent donations', err);
    }
  };

  const amounts = [500, 1000, 2500, 5000, 10000, 25000];

  const currentAmount =
    customAmount !== '' ? Number(customAmount) || 0 : selectedAmount || 0;

  const impactDescriptions = {
    500: 'Helps provide essential food, education and community support.',
    1000: 'Supports education materials and essential healthcare for families.',
    2500: 'Helps fund healthcare, education and sustainable community projects.',
    5000: 'Supports larger community development and livelihood initiatives.',
    10000: 'Helps expand clean water, healthcare and education programs.',
    25000: 'Provides substantial support for long-term community development.',
  };

  const impactText =
    impactDescriptions[currentAmount] ||
    'Your contribution helps fund sustainable community development initiatives.';

  const selectAmount = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonate = async (e) => {
    e.preventDefault();

    if (currentAmount < 1) {
      alert('Please enter a valid donation amount.');
      return;
    }

    if (!formData.anonymous && (!formData.name.trim() || !formData.phone.trim())) {
      alert('Please provide your name and phone number, or check Anonymous.');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please provide your email address for receipts.');
      return;
    }

    if (!window.Razorpay) {
      alert('Razorpay is still loading. Please try again.');
      return;
    }

    try {
      setIsProcessing(true);

      const orderResponse = await fetch(`${api_url}api/donations/create-order.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: currentAmount,
          name: formData.anonymous ? 'Anonymous' : formData.name,
          email: formData.email,
          phone: formData.anonymous ? '' : formData.phone,
          anonymous: formData.anonymous ? 1 : 0,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Unable to create payment order');
      }

      const order = await orderResponse.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'HopeBridge Foundation',
        description: 'One-Time Donation',
        order_id: order.id,
        prefill: {
          name: formData.anonymous ? 'Anonymous' : formData.name,
          email: formData.email,
          contact: formData.anonymous ? '' : formData.phone,
        },
        notes: {
          anonymous: formData.anonymous ? 'yes' : 'no',
          message: formData.message,
        },
        theme: {
          color: '#059669',
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          },
        },
        handler: async function (response) {
          try {
            const verifyResponse = await fetch(
              `${api_url}api/donations/verify-payment.php`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  amount: currentAmount,
                  donor: {
                    ...formData,
                    name: formData.anonymous ? 'Anonymous' : formData.name,
                  },
                }),
              }
            );

            const result = await verifyResponse.json();

            if (!verifyResponse.ok || !result.success) {
              throw new Error('Payment verification failed');
            }

            setPaymentId(response.razorpay_payment_id);
            setPaymentSuccess(true);
            fetchRecentDonations(); // Refresh ticker list
          } catch (error) {
            console.error(error);
            alert(
              'Payment was received, but verification is pending. Please contact support.'
            );
          } finally {
            setIsProcessing(false);
          }
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert('Unable to start payment. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 text-slate-900">
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              {/* LEFT */}
              <div className="space-y-8 lg:col-span-7">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Secure Donation Portal
                  </div>

                  <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    Make a Difference
                    <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                      ₹ One Contribution at a Time
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Your contribution supports education, healthcare, clean water
                    and sustainable community development.
                  </p>
                </div>

                {/* IMPACT */}
                <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-emerald-500 to-blue-600" />

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
                      ♥
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                        Your Impact
                      </p>

                      <p className="mt-2 text-xl font-black text-slate-900">
                        ₹{currentAmount.toLocaleString('en-IN')}
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {impactText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* TRUST */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    ['🔒', 'Secure Payments', 'Razorpay protected'],
                    ['⚡', 'Instant Payment', 'UPI, Cards & Banking'],
                    ['✓', 'Transparent', 'Donation tracking'],
                  ].map(([icon, title, subtitle]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <div className="mb-3 text-xl">{icon}</div>
                      <p className="text-sm font-bold">{title}</p>
                      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FORM */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                  <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600" />

                  <div className="p-6 sm:p-8">
                    <div className="mb-7">
                      <h2 className="text-2xl font-black">Support Our Mission</h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Choose your contribution amount
                      </p>
                    </div>

                    <form onSubmit={handleDonate} className="space-y-6">
                      {/* AMOUNTS */}
                      <div>
                        <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-slate-500">
                          Donation Amount
                        </label>

                        <div className="grid grid-cols-3 gap-2">
                          {amounts.map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => selectAmount(amount)}
                              className={`rounded-2xl border-2 py-3 text-sm font-black transition sm:text-base ${
                                selectedAmount === amount
                                  ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                                  : 'border-slate-100 bg-slate-50 text-slate-700 hover:border-emerald-200'
                              }`}
                            >
                              ₹{amount.toLocaleString('en-IN')}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* CUSTOM */}
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                          Custom Amount
                        </label>

                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                            ₹
                          </span>

                          <input
                            type="number"
                            min="1"
                            value={customAmount}
                            onChange={handleCustomAmount}
                            placeholder="Enter amount"
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-9 pr-4 font-bold outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                          />
                        </div>
                      </div>

                      {/* DETAILS */}
                      <div className="space-y-3 border-t border-slate-100 pt-5">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                            Donor Details
                          </label>
                          <label className="flex cursor-pointer items-center gap-2 text-xs font-semibold text-emerald-700">
                            <input
                              type="checkbox"
                              checked={formData.anonymous}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  anonymous: e.target.checked,
                                  name: e.target.checked ? '' : formData.name,
                                  phone: e.target.checked ? '' : formData.phone,
                                })
                              }
                              className="h-4 w-4 rounded border-slate-300 text-emerald-600"
                            />
                            Make Anonymous
                          </label>
                        </div>

                        <input
                          required={!formData.anonymous}
                          disabled={formData.anonymous}
                          type="text"
                          placeholder={formData.anonymous ? "Hidden (Anonymous)" : "Full Name *"}
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none disabled:bg-slate-100 disabled:text-slate-400 focus:border-emerald-500 focus:bg-white"
                        />

                        <input
                          required
                          type="email"
                          placeholder="Email Address * (for receipt)"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                        />

                        <input
                          disabled={formData.anonymous}
                          type="tel"
                          placeholder={formData.anonymous ? "Hidden (Anonymous)" : "Phone Number"}
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none disabled:bg-slate-100 disabled:text-slate-400 focus:border-emerald-500 focus:bg-white"
                        />

                        <textarea
                          rows={2}
                          placeholder="Message / Dedication (optional)"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                        />
                      </div>

                      {/* PAY BUTTON */}
                      <button
                        disabled={isProcessing}
                        type="submit"
                        className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-4 text-base font-black text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isProcessing
                          ? 'Opening Secure Checkout...'
                          : `Donate ₹${currentAmount.toLocaleString('en-IN')}`}
                      </button>

                      {/* AUTO-SCROLLING LIVE DONATIONS TICKER (Below Button) */}
                      {recentDonations.length > 0 && (
                        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3">
                          <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                            ✨ Recent Contributions
                          </p>
                          <div className="relative w-full overflow-hidden whitespace-nowrap">
                            <div className="inline-flex animate-marquee gap-6 text-xs text-slate-700">
                              {recentDonations.concat(recentDonations).map((d, index) => (
                                <div key={index} className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-sm">
                                  <span className="font-bold text-emerald-600">{d.anonymous == 1 ? 'Anonymous' : d.name}</span>
                                  <span>donated</span>
                                  <span className="font-extrabold text-slate-900">₹{Number(d.amount).toLocaleString('en-IN')}</span>
                                  {d.message && <span className="text-slate-400 italic">"{d.message}"</span>}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-center gap-2 text-[11px] text-slate-400">
                        <span>🔒 Secure Razorpay Checkout</span>
                        <span>•</span>
                        <span>UPI • Cards • NetBanking</span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS MODAL */}
        {paymentSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl text-emerald-600">
                ✓
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-emerald-600">
                Payment Successful
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Thank You, {formData.anonymous ? 'Supporter' : formData.name}!
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your contribution of{' '}
                <strong>₹{currentAmount.toLocaleString('en-IN')}</strong> has
                been successfully received.
              </p>

              {paymentId && (
                <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-left">
                  <p className="text-xs text-slate-500">Razorpay Payment ID</p>
                  <p className="mt-1 break-all font-mono text-xs font-bold text-slate-800">
                    {paymentId}
                  </p>
                </div>
              )}

              <button
                onClick={() => {
                  setPaymentSuccess(false);
                  setPaymentId('');
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    anonymous: false,
                  });
                }}
                className="mt-6 w-full rounded-2xl bg-slate-900 py-3.5 text-sm font-bold text-white"
              >
                Make Another Donation
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}