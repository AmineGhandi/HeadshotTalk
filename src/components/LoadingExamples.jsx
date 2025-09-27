import React, { useState } from 'react';
import LoadingAnimation from './LoadingAnimation';
import LoadingScreen from './LoadingScreen';

/**
 * LoadingExamples - Demonstrates various ways to use the loading components
 * This component shows different sizes, contexts, and use cases for the loading animations
 */
const LoadingExamples = () => {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [isSimulatingLoad, setIsSimulatingLoad] = useState(false);

  const simulateLoading = () => {
    setIsSimulatingLoad(true);
    setTimeout(() => {
      setIsSimulatingLoad(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Loading Animation Examples</h1>
        <p className="text-gray-600">Various implementations of the HeadShot Talk loading animation</p>
      </div>

      {/* Different Sizes */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Different Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Small (40px)</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <LoadingAnimation size={40} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Medium (80px)</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <LoadingAnimation size={80} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Large (120px)</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <LoadingAnimation size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Loading States */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Loading States</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Inline Loading</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              {isSimulatingLoad ? (
                <LoadingScreen fullScreen={false} message="Processing your request..." />
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Content loaded successfully!</p>
                  <button 
                    onClick={simulateLoading}
                    className="bg-podcast-orange hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Simulate Loading
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Full Screen Loading</h3>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <button 
                onClick={() => setShowFullScreen(true)}
                className="bg-podcast-orange hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Show Full Screen Loading
              </button>
              <p className="text-sm text-gray-500 mt-2">Click to see full screen loading overlay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Usage Examples</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Basic Loading Animation</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import LoadingAnimation from './components/LoadingAnimation';

// Basic usage
<LoadingAnimation />

// Custom size
<LoadingAnimation size={100} />

// With custom className
<LoadingAnimation size={60} className="my-custom-class" />`}
            </pre>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Loading Screen Component</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import LoadingScreen from './components/LoadingScreen';

// Full screen loading
<LoadingScreen message="Loading HeadShot Talk..." />

// Inline loading
<LoadingScreen fullScreen={false} message="Processing..." />

// Conditional loading
{isLoading && <LoadingScreen message="Please wait..." />}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Full Screen Loading Modal */}
      {showFullScreen && (
        <LoadingScreen 
          message="This is a full screen loading example" 
          fullScreen={true} 
        />
      )}

      {/* Auto-hide full screen loading after 3 seconds */}
      {showFullScreen && setTimeout(() => setShowFullScreen(false), 3000)}
    </div>
  );
};

export default LoadingExamples;