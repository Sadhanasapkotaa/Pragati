import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">About Pragati</h3>
            <p className="mt-2 text-sm text-gray-700">
              We are dedicated to making learning fun and interactive for kids of all ages. Explore educational games, activities, and more!
            </p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><a href="#games" className="hover:text-blue-600">Educational Games</a></li>
              <li><a href="#activities" className="hover:text-blue-600">Fun Activities</a></li>
              <li><a href="#worksheets" className="hover:text-blue-600">Printable Worksheets</a></li>
              <li><a href="#blogs" className="hover:text-blue-600">Learning Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Parents' Corner */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Parents' Corner</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><a href="#tips" className="hover:text-blue-600">Parenting Tips</a></li>
              <li><a href="#community" className="hover:text-blue-600">Join Our Community</a></li>
              <li><a href="#faq" className="hover:text-blue-600">FAQs</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Connect with Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#facebook" className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V10.71h3.128V8.432c0-3.1 1.894-4.785 4.659-4.785 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.997h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="#twitter" className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.918 4.918 0 002.163-2.724c-.951.555-2.005.96-3.127 1.184a4.907 4.907 0 00-8.364 4.482 13.93 13.93 0 01-10.118-5.144c-.366.63-.577 1.364-.577 2.146 0 1.481.754 2.789 1.903 3.556a4.904 4.904 0 01-2.224-.614v.062c0 2.07 1.474 3.8 3.421 4.192-.359.098-.736.149-1.124.149-.275 0-.542-.027-.803-.077.543 1.692 2.117 2.926 3.981 2.96a9.868 9.868 0 01-6.102 2.102c-.395 0-.787-.023-1.175-.068a13.95 13.95 0 007.548 2.209c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#instagram" className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.847 0 3.204-.012 3.584-.07 4.85-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.85.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.766 0 8.333.013 7.051.073 5.786.134 4.597.404 3.515 1.486 2.434 2.568 2.164 3.757 2.104 5.022.073 8.324 0 8.756 0 12c0 3.244.073 3.676.104 4.948.06 1.265.33 2.454 1.412 3.536 1.081 1.082 2.27 1.352 3.535 1.412 1.272.07 1.704.104 4.948.104s3.676-.073 4.948-.104c1.265-.06 2.454-.33 3.536-1.412 1.082-1.082 1.352-2.271 1.412-3.536.07-1.272.104-1.704.104-4.948s-.073-3.676-.104-4.948c-.06-1.265-.33-2.454-1.412-3.536-1.082-1.082-2.271-1.352-3.536-1.412C15.676.013 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          &copy; 2024 FunLearn. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;