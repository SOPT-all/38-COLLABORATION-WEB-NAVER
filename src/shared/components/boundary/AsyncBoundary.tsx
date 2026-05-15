import {QueryErrorResetBoundary} from '@tanstack/react-query';
import {Component, Suspense, type ErrorInfo, type ReactNode} from 'react';

import {
  DefaultErrorFallback,
  DefaultPendingFallback,
  type BoundaryFallbackProps,
} from '@/shared/components/boundary/BoundaryFallback';

type AsyncBoundaryProps = {
  children: ReactNode;
  pendingFallback?: ReactNode;
  errorFallback?: (props: BoundaryFallbackProps) => ReactNode;
  onError?: (error: unknown, info: ErrorInfo) => void;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  fallbackRender: (props: BoundaryFallbackProps) => ReactNode;
  onError?: (error: unknown, info: ErrorInfo) => void;
  onReset?: () => void;
};

type ErrorBoundaryState = {
  error: unknown;
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
    hasError: false,
  };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return {error, hasError: true};
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
  }

  private reset = () => {
    this.props.onReset?.();
    this.setState({error: null, hasError: false});
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallbackRender({
        error: this.state.error,
        reset: this.reset,
      });
    }

    return this.props.children;
  }
}

export const AsyncBoundary = ({
  children,
  pendingFallback = <DefaultPendingFallback />,
  errorFallback,
  onError,
}: AsyncBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({reset}) => (
        <ErrorBoundary
          onReset={reset}
          onError={onError}
          fallbackRender={(props) =>
            errorFallback ? (
              errorFallback(props)
            ) : (
              <DefaultErrorFallback {...props} />
            )
          }>
          <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
