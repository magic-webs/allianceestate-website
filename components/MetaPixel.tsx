'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import Script from 'next/script';
import { FB_PIXEL_ID, pageview } from '../utils/pixel';

function MetaPixelTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview();
    }
  }, [pathname, searchParams]);

  // Global click delegate for automatic Contact event tracking on WhatsApp, phone, and contact buttons
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      
      // WhatsApp click
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Contact', {
            content_category: 'WhatsApp',
            content_name: target.getAttribute('aria-label') || target.textContent?.trim() || 'WhatsApp Click',
            target_url: href,
          });
        }
      }
      // Phone call click
      else if (href.startsWith('tel:')) {
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Contact', {
            content_category: 'Phone',
            content_name: 'Phone Call Click',
            target_url: href,
          });
        }
      }
      // Email click
      else if (href.startsWith('mailto:')) {
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Contact', {
            content_category: 'Email',
            content_name: 'Email Inquiry Click',
            target_url: href,
          });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}

export default function MetaPixel() {
  return (
    <>
      {/* Meta Pixel Base Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Dynamic Route Change PageView & Event Delegation */}
      <Suspense fallback={null}>
        <MetaPixelTracking />
      </Suspense>
    </>
  );
}
