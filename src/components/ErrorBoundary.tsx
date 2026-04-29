import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen flex items-center justify-center bg-background px-4"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-md w-full text-center">
            <div className="bg-card rounded-[var(--radius-xl)] p-8 shadow-[var(--elevation-sm)] border border-border">
              <div 
                className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6"
                aria-hidden="true"
              >
                <svg
                  className="w-8 h-8 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              
              <h1 
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-roboto)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-bold)'
                }}
              >
                Something went wrong
              </h1>
              
              <p 
                className="text-muted-foreground mb-6"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>

              {this.state.error && (
                <details className="text-left mb-6 p-4 bg-muted/20 rounded-[var(--radius-md)] text-sm">
                  <summary 
                    className="cursor-pointer text-foreground mb-2"
                    style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600 }}
                  >
                    Error details
                  </summary>
                  <code 
                    className="text-destructive block mt-2 text-xs break-all"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {this.state.error.message}
                  </code>
                </details>
              )}

              <Button
                onClick={this.handleReset}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-[var(--radius-lg)]"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
