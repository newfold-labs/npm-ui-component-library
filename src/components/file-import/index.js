import { useCallback, useContext, createContext, useMemo, forwardRef } from "@wordpress/element";
import { values, includes, isEmpty, isNull, capitalize } from "lodash";
import { DocumentTextIcon, XIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { Transition } from "@headlessui/react";

import FileInput from "../../elements/file-input";
import ProgressBar from "../../elements/progress-bar";
import { ValidationIcon } from "../../elements/validation";

export const FILE_IMPORT_STATUS = {
	idle: "idle",
	selected: "selected",
	loading: "loading",
	success: "success",
	aborted: "aborted",
	error: "error",
};

const FileImportContext = createContext( { status: FILE_IMPORT_STATUS.idle } );

/**
 * @returns {Object} The current file import context.
 */
const useFileImportContext = () => useContext( FileImportContext );

const statusIconTransitionProps = {
	enter: "nfd-transition-opacity nfd-ease-in-out nfd-duration-1000 nfd-delay-200",
	enterFrom: "nfd-opacity-0",
	enterTo: "nfd-opacity-100",
	leave: "nfd-transition-opacity nfd-ease-in-out nfd-duration-200",
	leaveFrom: "nfd-opacity-0",
	leaveTo: "nfd-opacity-100",
	className: "nfd-absolute",
};

/**
 * @param {string} status A valid file import status.
 * @returns {JSX.Element} Component that renders conditionally based on given file import status.
 */
const createStatusConditionalRender = ( status ) => {
	/**
	 * @param {JSX.node} children The React children.
	 * @returns {JSX.Element} Component that renders conditionally based on given file import status.
	 */
	const HOC = ( { children } ) => {
		const { status: currentStatus } = useFileImportContext();
		return (
			<Transition
				show={ currentStatus === status }
				enter="nfd-transition-opacity nfd-ease-in-out nfd-duration-1000 nfd-delay-200"
				enterFrom="nfd-opacity-0"
				enterTo="nfd-opacity-100"
				className="nfd-mt-6"
			>
				{ children }
			</Transition>
		);
	};
	HOC.propTypes = { children: PropTypes.node };
	// Provide meaningful display name for React dev tools.
	HOC.displayName = `FileImport.${ capitalize( status ) }`;

	return HOC;
};

/**
 * The FileImport component.
 *
 * @param {JSX.node} children The React children.
 * @param {string} id The inputs id.
 * @param {string} name The inputs name.
 * @param {string} selectLabel The label for native select file functionality.
 * @param {string} dropLabel The label for custom drop file functionality.
 * @param {string} screenReaderLabel The screen reader label for the file select.
 * @param {string} abortScreenReaderLabel The screen reader label for the abort button.
 * @param {JSX.node} selectDescription The selectDescription.
 * @param {"idle"|"loading"|"success"|"failure"} status The status the component should be in.
 * @param {Function} onChange The callback for when a file is imported.
 * @param {Function} onAbort The callback for when an file import is aborted.
 * @param {string} feedbackTitle The import feedback title.
 * @param {string} feedbackDescription The import feedback selectDescription.
 * @param {number} progressMin The import progress min value.
 * @param {number} progressMax The import progress max value.
 * @param {number} progress The import progress.
 * @returns {JSX.Element} The FileImport component.
 */
const FileImport = forwardRef( ( {
	children = "",
	id,
	name,
	selectLabel,
	dropLabel,
	screenReaderLabel,
	abortScreenReaderLabel,
	selectDescription,
	status,
	onChange,
	onAbort,
	feedbackTitle,
	feedbackDescription,
	progressMin,
	progressMax,
	progress,
}, ref ) => {
	const isSelected = useMemo( () => status === FILE_IMPORT_STATUS.selected, [ status ] );
	const isLoading = useMemo( () => status === FILE_IMPORT_STATUS.loading, [ status ] );
	const isSuccess = useMemo( () => status === FILE_IMPORT_STATUS.success, [ status ] );
	const isAborted = useMemo( () => status === FILE_IMPORT_STATUS.aborted, [ status ] );
	const isError = useMemo( () => status === FILE_IMPORT_STATUS.error, [ status ] );

	const hasFeedback = useMemo( () => includes(
		[ FILE_IMPORT_STATUS.selected, FILE_IMPORT_STATUS.loading, FILE_IMPORT_STATUS.success, FILE_IMPORT_STATUS.aborted, FILE_IMPORT_STATUS.error ],
		status,
	), [ status ] );

	const handleChange = useCallback( ( event ) => {
		if ( ! isEmpty( event.target.files ) ) {
			onChange( event.target.files[ 0 ] );
		}
	}, [ onChange ] );

	const handleDrop = useCallback( ( event ) => {
		if ( ! isEmpty( event.dataTransfer.files ) ) {
			const file = event.dataTransfer.files[ 0 ];
			if ( file ) {
				onChange( file );
			}
		}
	}, [ onChange ] );

	return (
		<FileImportContext.Provider value={ { status } }>
			<div className="nfd-file-import">
				<FileInput
					ref={ ref }
					id={ id }
					name={ name }
					// Don't control value here to allow consecutive imports of the same file.
					value=""
					onChange={ handleChange }
					onDrop={ handleDrop }
					className="nfd-file-import__input"
					aria-labelledby={ screenReaderLabel }
					disabled={ isLoading }
					selectLabel={ selectLabel }
					dropLabel={ dropLabel }
					screenReaderLabel={ screenReaderLabel }
					selectDescription={ selectDescription }
				/>
				<Transition
					show={ hasFeedback }
					enter="nfd-transition-opacity nfd-ease-in-out nfd-duration-1000 nfd-delay-200"
					enterFrom="nfd-opacity-0"
					enterTo="nfd-opacity-100"
				>
					<div className="nfd-file-import__feedback">
						<header className="nfd-file-import__feedback-header">
							<div className="nfd-file-import__feedback-figure"><DocumentTextIcon /></div>
							<div className="nfd-flex-1">
								<span className="nfd-file-import__feedback-title">{ feedbackTitle }</span>
								<p className="nfd-file-import__feedback-description">{ feedbackDescription }</p>
								{ ! isNull( progress ) && (
									<ProgressBar min={ progressMin } max={ progressMax } progress={ progress } className="nfd-mt-1.5" />
								) }
							</div>
							<div className="nfd-relative nfd-h-5 nfd-w-5">
								<Transition show={ isSelected } { ...statusIconTransitionProps }>
									<ValidationIcon variant="info" className="nfd-w-5 nfd-h-5" />
								</Transition>
								<Transition show={ isLoading } { ...statusIconTransitionProps }>
									<button onClick={ onAbort } className="nfd-file-import__abort-button">
										<span className="nfd-sr-only">{ abortScreenReaderLabel }</span>
										<XIcon />
									</button>
								</Transition>
								<Transition show={ isSuccess } { ...statusIconTransitionProps }>
									<ValidationIcon variant="success" className="nfd-w-5 nfd-h-5" />
								</Transition>
								<Transition show={ isAborted } { ...statusIconTransitionProps }>
									<ValidationIcon variant="warning" className="nfd-w-5 nfd-h-5" />
								</Transition>
								<Transition show={ isError } { ...statusIconTransitionProps }>
									<ValidationIcon variant="error" className="nfd-w-5 nfd-h-5" />
								</Transition>
							</div>
						</header>
						{ children }
					</div>
				</Transition>
			</div>
		</FileImportContext.Provider>
	);
} );

const propTypes = {
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	selectLabel: PropTypes.string.isRequired,
	dropLabel: PropTypes.string.isRequired,
	screenReaderLabel: PropTypes.string.isRequired,
	abortScreenReaderLabel: PropTypes.string.isRequired,
	selectDescription: PropTypes.string,
	feedbackTitle: PropTypes.string.isRequired,
	feedbackDescription: PropTypes.string,
	progressMin: PropTypes.number,
	progressMax: PropTypes.number,
	progress: PropTypes.number,
	status: PropTypes.oneOf( values( FILE_IMPORT_STATUS ) ),
	onChange: PropTypes.func.isRequired,
	onAbort: PropTypes.func.isRequired,
};

FileImport.propTypes = propTypes;

FileImport.defaultProps = {
	feedbackDescription: "",
	progressMin: null,
	progressMax: null,
	progress: null,
	status: FILE_IMPORT_STATUS.idle,
};

FileImport.Selected = createStatusConditionalRender( FILE_IMPORT_STATUS.selected );
FileImport.Loading = createStatusConditionalRender( FILE_IMPORT_STATUS.loading );
FileImport.Success = createStatusConditionalRender( FILE_IMPORT_STATUS.success );
FileImport.Aborted = createStatusConditionalRender( FILE_IMPORT_STATUS.aborted );
FileImport.Error = createStatusConditionalRender( FILE_IMPORT_STATUS.error );

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <FileImport { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = FileImport.defaultProps;
StoryComponent.displayName = "FileImport";

export default FileImport;
