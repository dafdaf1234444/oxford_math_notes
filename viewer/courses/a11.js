// A11 Quantum Theory — Course Metadata
// Auto-extracted from Part_A/Michaelmas/A11_Quantum_Theory/index.html

VIEWER.registerCourse({
  key: 'a11',
  code: 'A11',
  title: 'Quantum Theory',
  term: 'Michaelmas',
  year: 2024,
  instructor: 'Márk Mezei',
  items: 52,
  path: '../Part_A/Michaelmas/A11_Quantum_Theory/index.html',
  envNames: {
    // Section 1: Physical background
    "def-1.1": "Einstein\u2013Planck relation",
    "def-1.2": "De Broglie relations",
    // Section 2: Wave mechanics
    "def-2.1": "Schr\u00f6dinger equation",
    "def-2.2": "Stationary state Schr\u00f6dinger equation",
    "def-2.3": "Ground state energy",
    "def-2.4": "Degeneracy",
    // Section 3: The Born interpretation
    "def-3.1": "Born rule",
    "def-3.2": "Normalizable wave function",
    "def-3.3": "Expectation value of position",
    "prop-3.1": "Continuity equation",
    "prop-3.2": "Conservation of probability",
    "def-3.4": "Energy measurement probability",
    // Section 4: The harmonic oscillator
    "def-4.1": "Parity state",
    "thm-4.1": "Harmonic oscillator energies",
    // Section 5: Mathematical structure
    "def-5.1": "Quantum states",
    "def-5.2": "Hilbert space",
    "def-5.3": "Observables",
    "def-5.4": "Position and momentum operators",
    "lem-5.1": "Self-adjoint operator construction",
    "def-5.5": "Hamiltonian operator",
    "def-5.6": "Eigenstate and spectrum",
    "prop-5.2": "Real eigenvalues and orthogonality",
    "thm-5.3": "Spectral theorem",
    "def-5.7": "Quantum measurement postulate",
    "def-5.8": "Collapse of the wave function",
    // Section 6: Statistical aspects
    "def-6.1": "Expectation value",
    "def-6.2": "Identity and non-negative operators",
    "prop-6.1": "Expectation value properties",
    "def-6.3": "Dispersion",
    "prop-6.2": "Dispersion and eigenstates",
    "def-6.4": "Commutator",
    "prop-6.3": "Canonical commutation relations",
    "prop-6.4": "Commutator properties",
    "prop-6.5": "Uncertainty inequality",
    "cor-6.6": "Heisenberg uncertainty principle",
    "cor-6.7": "General uncertainty relation",
    // Section 7: Harmonic oscillator revisited
    "def-7.1": "Raising and lowering operators",
    "lem-7.1": "Hamiltonian factorization",
    "def-7.2": "Number operator",
    "prop-7.2": "Ladder operator commutation",
    "lem-7.3": "Number operator eigenvalue properties",
    "thm-7.4": "Spectrum of the number operator",
    "prop-7.6": "Normalized stationary states",
    // Section 8: Angular momentum
    "def-8.1": "Angular momentum operator",
    "prop-8.1": "Angular momentum commutation relations",
    "def-8.2": "General angular momentum operator",
    "def-8.3": "Total angular momentum squared",
    "prop-8.2": "J\u00b2 commutes with components",
    "thm-8.3": "Spectrum of angular momentum",
    "def-8.4": "Spherical harmonics",
    // Section 9: The hydrogen atom
    "def-9.1": "Central potential",
    "thm-9.1": "Hydrogen atom spectrum"
  },
  guideDescs: {
    // Section 1
    "def-1.1": "Light of angular frequency \\(\\omega\\) exists in quanta of energy \\(E = \\hbar\\omega\\). These photon packets explain the photoelectric effect, where electrons are emitted only when \\(\\omega > E_0/\\hbar\\).",
    "def-1.2": "A free particle of energy \\(E\\) and momentum \\(\\mathbf{p}\\) is associated with a wave via \\(E = \\hbar\\omega\\) and \\(\\mathbf{p} = \\hbar\\mathbf{k}\\). This extends Einstein\u2019s photon relation to all particles, underpinning wave mechanics.",
    // Section 2
    "def-2.1": "A non-relativistic particle of mass \\(m\\) in potential \\(V(\\mathbf{x})\\) is governed by \\(i\\hbar\\frac{\\partial\\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\nabla^2\\Psi + V\\Psi\\). This complex linear PDE replaces Newton\u2019s second law at quantum scales.",
    "def-2.2": "Separating \\(\\Psi = \\psi(\\mathbf{x})e^{-iEt/\\hbar}\\) yields the time-independent equation \\(-\\frac{\\hbar^2}{2m}\\nabla^2\\psi + V\\psi = E\\psi\\). Solutions are stationary states with definite energy \\(E\\).",
    "def-2.3": "When energies are discrete and bounded below, the lowest energy is the ground state (zero point) energy. Higher energies are the first, second, etc. excited states.",
    "def-2.4": "An energy level \\(E\\) is \\(d\\)-fold degenerate if the space of stationary states with that energy has dimension \\(d > 1\\). Non-degenerate means \\(d = 1\\).",
    // Section 3
    "def-3.1": "The probability density is \\(\\rho = |\\Psi(\\mathbf{x},t)|^2\\). The probability of finding the particle in a region \\(D\\) is \\(\\int_D |\\Psi|^2 d^3x\\). This is the Born interpretation of the wave function.",
    "def-3.2": "A wave function is normalizable if \\(0 < \\int |\\Psi|^2 d^3x < \\infty\\) and normalized if the integral equals 1. The Born interpretation requires normalization.",
    "def-3.3": "The expectation value of \\(f(\\mathbf{x})\\) in state \\(\\Psi\\) is \\(E_\\Psi(f) = \\int f(\\mathbf{x})|\\Psi|^2 d^3x\\). This gives the average value of repeated position-dependent measurements.",
    "prop-3.1": "The Schr\u00f6dinger equation implies \\(\\partial\\rho/\\partial t + \\nabla\\cdot\\mathbf{j} = 0\\) where \\(\\mathbf{j} = \\frac{i\\hbar}{2m}(\\Psi\\nabla\\bar\\Psi - \\bar\\Psi\\nabla\\Psi)\\) is the probability current. This is a conservation law for probability.",
    "prop-3.2": "If the probability current decays sufficiently fast at infinity, then \\(\\int|\\Psi|^2 d^3x\\) is independent of time. A wave function normalized at one time stays normalized forever.",
    "def-3.4": "For a state \\(\\Psi = \\sum c_n \\psi_n e^{-iE_nt/\\hbar}\\), the probability of measuring energy \\(E_n\\) is \\(|c_n|^2\\). This follows from orthonormality of stationary states.",
    // Section 4
    "def-4.1": "A 1D stationary state with \\(\\psi(-x) = \\psi(x)\\) has even parity; with \\(\\psi(-x) = -\\psi(x)\\) it has odd parity. For symmetric potentials, stationary states can always be chosen to have definite parity.",
    "thm-4.1": "The 1D harmonic oscillator with angular frequency \\(\\omega\\) has energies \\(E_n = (n + \\tfrac{1}{2})\\hbar\\omega\\) for \\(n \\in \\mathbb{Z}_{\\geq 0}\\). Wave functions are \\(\\psi_n \\propto H_n(\\xi)e^{-\\xi^2/2}\\) with Hermite polynomials \\(H_n\\).",
    // Section 5
    "def-5.1": "The states of a quantum system are elements of a complex inner product space \\(\\mathcal{H}\\). Proportional vectors represent the same physical state.",
    "def-5.2": "A complete complex inner product space is a Hilbert space. Completeness ensures infinite sums (superpositions) converge to elements of \\(\\mathcal{H}\\).",
    "def-5.3": "Observables (measurable quantities) correspond to self-adjoint linear operators \\(A\\) on \\(\\mathcal{H}\\), satisfying \\(\\langle\\phi|A\\psi\\rangle = \\langle A\\phi|\\psi\\rangle\\) for all states.",
    "def-5.4": "Position: \\((X_i\\psi)(\\mathbf{x}) = x_i\\psi(\\mathbf{x})\\). Momentum: \\((P_i\\psi)(\\mathbf{x}) = -i\\hbar\\frac{\\partial\\psi}{\\partial x_i}\\). Both are self-adjoint on suitable domains.",
    "lem-5.1": "If \\(A, B\\) are self-adjoint, so are \\(A + B\\), \\(\\alpha A\\) (\\(\\alpha\\) real), and \\(A^2\\). This lets us build observables like the Hamiltonian from position and momentum.",
    "def-5.5": "The Hamiltonian \\(H = \\frac{|\\mathbf{P}|^2}{2m} + V(\\mathbf{X})\\) is the energy observable. Acting on wave functions: \\((H\\psi)(\\mathbf{x}) = -\\frac{\\hbar^2}{2m}\\nabla^2\\psi + V\\psi\\).",
    "def-5.6": "An eigenstate of observable \\(A\\) satisfies \\(A\\psi = \\alpha\\psi\\) for eigenvalue \\(\\alpha\\). The set of all eigenvalues is the spectrum of \\(A\\).",
    "prop-5.2": "Eigenvalues of self-adjoint operators are real. Eigenstates with distinct eigenvalues are orthogonal: \\(\\langle\\psi_1|\\psi_2\\rangle = 0\\) when \\(\\alpha_1 \\neq \\alpha_2\\).",
    "thm-5.3": "If \\(A\\) is self-adjoint on a finite-dimensional \\(\\mathcal{H}\\), there exists a complete orthonormal basis of eigenvectors. This generalizes to infinite dimensions under suitable conditions.",
    "def-5.7": "Measuring observable \\(A\\) yields eigenvalue \\(\\alpha_n\\) with probability \\(|c_n|^2\\) where \\(\\psi = \\sum c_n\\psi_n\\) in the eigenbasis. Only eigenvalues can be observed.",
    "def-5.8": "After measuring \\(A\\) and obtaining eigenvalue \\(\\alpha_n\\), the state instantaneously collapses to the eigenstate \\(\\psi_n\\). All prior superposition information is lost.",
    // Section 6
    "def-6.1": "The expectation value of observable \\(A\\) in normalized state \\(\\psi\\) is \\(E_\\psi(A) = \\langle\\psi|A\\psi\\rangle = \\sum \\alpha_n|c_n|^2\\). It equals the average over repeated measurements.",
    "def-6.2": "The identity operator \\(\\mathbf{1}\\) satisfies \\(\\mathbf{1}\\psi = \\psi\\). An operator \\(A\\) is non-negative if \\(\\langle\\psi|A\\psi\\rangle \\geq 0\\) for all \\(\\psi\\).",
    "prop-6.1": "Expectation is linear: \\(E(A+B) = E(A) + E(B)\\), \\(E(\\alpha A) = \\alpha E(A)\\). For non-negative \\(A\\), \\(E(A) \\geq 0\\). Also \\(E(\\mathbf{1}) = 1\\).",
    "def-6.3": "The dispersion \\(\\Delta_\\psi(A) = \\sqrt{E_\\psi(A^2) - (E_\\psi(A))^2}\\) measures the spread of measurement outcomes around the mean. It is the quantum analogue of standard deviation.",
    "prop-6.2": "The dispersion \\(\\Delta_\\psi(A) = 0\\) if and only if \\(\\psi\\) is an eigenstate of \\(A\\). In that case the eigenvalue equals \\(E_\\psi(A)\\) and measurement is certain.",
    "def-6.4": "The commutator \\([A,B] = AB - BA\\) measures non-commutativity of operators. It is central to the algebraic structure of quantum mechanics.",
    "prop-6.3": "In 1D: \\([X,P] = i\\hbar\\mathbf{1}\\). In 3D: \\([X_i,P_j] = i\\hbar\\delta_{ij}\\mathbf{1}\\), \\([X_i,X_j] = 0 = [P_i,P_j]\\). The canonical commutation relations encode the fundamental quantum structure.",
    "prop-6.4": "The commutator is antisymmetric (\\([A,B] = -[B,A]\\)), linear, satisfies the Leibniz rule (\\([A,BC] = B[A,C] + [A,B]C\\)), and the Jacobi identity. If \\([A,B] = iC\\) with \\(A,B\\) self-adjoint, then \\(C\\) is self-adjoint.",
    "prop-6.5": "For self-adjoint \\(A,B\\) with \\([A,B] = iC\\): \\(E(A^2)E(B^2) \\geq \\tfrac{1}{4}(E(C))^2\\). Equality holds iff \\((A - is_0B)\\psi = 0\\) for some real \\(s_0\\).",
    "cor-6.6": "Heisenberg\u2019s uncertainty principle: \\(\\Delta_\\psi(X)\\Delta_\\psi(P) \\geq \\frac{\\hbar}{2}\\). Equality holds for Gaussian wave functions (minimum uncertainty states). This is a direct consequence of \\([X,P] = i\\hbar\\).",
    "cor-6.7": "For any self-adjoint \\(A,B\\): \\(\\Delta_\\psi(A)\\Delta_\\psi(B) \\geq \\frac{1}{2}|E_\\psi([A,B])|\\). Non-commuting observables cannot both be measured with arbitrary precision.",
    // Section 7
    "def-7.1": "The raising and lowering operators \\(a_\\pm = \\frac{1}{\\sqrt{2m\\omega\\hbar}}(\\mp iP + m\\omega X)\\) satisfy \\(a_+ = (a_-)^*\\). They provide an algebraic approach to the harmonic oscillator.",
    "lem-7.1": "The Hamiltonian factorizes as \\(H = (N + \\tfrac{1}{2})\\hbar\\omega\\) where \\(N = a_+a_-\\) is the self-adjoint number operator. This follows from \\([X,P] = i\\hbar\\).",
    "def-7.2": "The number operator \\(N = a_+a_-\\) counts the excitation level. Its eigenvalue on \\(\\psi_n\\) is \\(n\\), giving energy \\(E_n = (n + \\tfrac{1}{2})\\hbar\\omega\\).",
    "prop-7.2": "\\([a_-,a_+] = 1\\), \\([N,a_\\pm] = \\pm a_\\pm\\). Also \\(\\|a_-\\psi\\|^2 = \\langle\\psi|N\\psi\\rangle\\) and \\(\\|a_+\\psi\\|^2 = \\langle\\psi|(N+1)\\psi\\rangle\\).",
    "lem-7.3": "If \\(N\\psi = \\lambda\\psi\\) with \\(\\psi \\neq 0\\): (a) \\(a_\\pm\\psi\\) are eigenstates with eigenvalue \\(\\lambda \\pm 1\\) (if non-zero), and (b) \\(\\lambda \\geq 0\\) with equality iff \\(a_-\\psi = 0\\).",
    "thm-7.4": "The spectrum of \\(N\\) is \\(\\mathbb{Z}_{\\geq 0}\\). If the ground state \\(\\psi_0\\) is unique, the full set of eigenstates is \\(\\{a_+^n\\psi_0 : n \\geq 0\\}\\), each with eigenvalue \\(n\\).",
    "prop-7.6": "The normalized stationary states are \\(\\psi_n = \\frac{1}{\\sqrt{n!}}a_+^n\\psi_0\\), forming an orthonormal set \\(\\langle\\psi_m|\\psi_n\\rangle = \\delta_{mn}\\).",
    // Section 8
    "def-8.1": "The orbital angular momentum \\(\\mathbf{L} = \\mathbf{X} \\wedge \\mathbf{P}\\) has components \\(L_i = \\sum \\epsilon_{ijk}X_jP_k\\). It is the quantum analogue of classical angular momentum.",
    "prop-8.1": "\\([L_i,X_j] = i\\hbar\\sum\\epsilon_{ijk}X_k\\), \\([L_i,P_j] = i\\hbar\\sum\\epsilon_{ijk}P_k\\), and \\([L_i,L_j] = i\\hbar\\sum\\epsilon_{ijk}L_k\\). The last says angular momentum components don\u2019t commute.",
    "def-8.2": "Any self-adjoint vector operator \\(\\mathbf{J} = (J_1,J_2,J_3)\\) satisfying \\([J_i,J_j] = i\\hbar\\sum\\epsilon_{ijk}J_k\\) is an angular momentum operator. This includes orbital \\(\\mathbf{L}\\) and spin.",
    "def-8.3": "\\(J^2 = J_1^2 + J_2^2 + J_3^2\\) measures the total angular momentum. It is self-adjoint and non-negative.",
    "prop-8.2": "\\([J^2, J_i] = 0\\) for all \\(i\\). So \\(J^2\\) and any single component \\(J_i\\) can be simultaneously measured (they share eigenstates).",
    "thm-8.3": "The simultaneous eigenvalues of \\(J^2\\) and \\(J_3\\) are \\(j(j+1)\\hbar^2\\) and \\(m\\hbar\\), where \\(j \\in \\tfrac{1}{2}\\mathbb{Z}_{\\geq 0}\\) and \\(m \\in \\{-j, -j+1, \\ldots, j\\}\\). For orbital AM, \\(j = l \\in \\mathbb{Z}_{\\geq 0}\\).",
    "def-8.4": "Spherical harmonics \\(Y_l^m(\\theta,\\phi)\\) are simultaneous eigenstates of \\(L^2\\) and \\(L_3\\) for orbital angular momentum. They form a complete orthonormal set on the sphere.",
    // Section 9
    "def-9.1": "A central potential \\(V = V(r)\\) depends only on the distance \\(r = |\\mathbf{x}|\\). The Schr\u00f6dinger equation separates in spherical coordinates, with angular part solved by spherical harmonics.",
    "thm-9.1": "The hydrogen atom energies are \\(E_n = -\\frac{m_e e^4}{2\\hbar^2 n^2}\\) for \\(n \\in \\mathbb{Z}_{>0}\\). Each level has degeneracy \\(n^2\\), explained by a hidden \\(SO(4)\\) symmetry."
  },
  guideOutline: {
    "sec0": "Classical particles and waves. Review of point particles (Newton\u2019s second law, conserved energy, momentum) and the wave equation. Sets notation for wave vector, angular frequency, wavelength. Everything here is classical background.",
    "sec1": "Physical background and wave-particle duality. The photoelectric effect shows light comes in quanta (photons, \\(E = \\hbar\\omega\\)). Atomic spectra reveal discrete energy levels. The double slit experiment shows particles behave as waves. De Broglie\u2019s relations \\(E = \\hbar\\omega\\), \\(\\mathbf{p} = \\hbar\\mathbf{k}\\) unify these observations.",
    "sec2": "Wave mechanics. The Schr\u00f6dinger equation is motivated from de Broglie\u2019s relations and classical energy. Stationary states separate time and space variables. Key examples: particle in a box (quantized energies \\(\\propto n^2\\)), degeneracy in 3D boxes, particle on a circle. Energy quantization emerges from boundary conditions.",
    "sec3": "The Born interpretation. The wave function\u2019s absolute value squared gives the probability density. Normalizable/normalized wave functions, expectation values. The continuity equation ensures probability is conserved. Energy measurement: expanding in stationary states gives measurement probabilities \\(|c_n|^2\\).",
    "sec4": "The harmonic oscillator. Near any potential minimum, physics looks like a harmonic oscillator. Solving the Schr\u00f6dinger equation via power series yields energies \\(E_n = (n + 1/2)\\hbar\\omega\\) with Hermite polynomial wave functions. Higher dimensions: separation of variables gives decoupled oscillators. Quantum tunnelling into classically forbidden regions.",
    "sec5": "The mathematical structure of quantum theory. States live in a Hilbert space \\(\\mathcal{H}\\). Observables are self-adjoint operators. Key examples: position \\(X\\), momentum \\(P = -i\\hbar\\nabla\\), Hamiltonian \\(H\\). The spectral theorem gives eigenbases. Measurement postulate: outcomes are eigenvalues with probabilities \\(|c_n|^2\\). Wave function collapse after measurement.",
    "sec6": "Statistical aspects. Expectation value \\(E(A) = \\langle\\psi|A\\psi\\rangle\\) and dispersion \\(\\Delta(A)\\). Zero dispersion iff eigenstate. Commutators encode algebraic structure: canonical \\([X,P] = i\\hbar\\), Leibniz rule, Jacobi identity. Heisenberg uncertainty principle \\(\\Delta(X)\\Delta(P) \\geq \\hbar/2\\) follows directly from the commutation relation. Minimum uncertainty states are Gaussians.",
    "sec7": "The harmonic oscillator revisited. Algebraic approach using raising/lowering operators \\(a_\\pm\\). The Hamiltonian factors as \\(H = (N + 1/2)\\hbar\\omega\\). Ladder operators move between eigenstates: \\(a_+\\) raises, \\(a_-\\) lowers. Spectrum of \\(N\\) is \\(\\mathbb{Z}_{\\geq 0}\\). Normalized states \\(\\psi_n = (1/\\sqrt{n!})a_+^n\\psi_0\\). Derives Hermite polynomial formula.",
    "sec8": "Angular momentum. Orbital angular momentum \\(\\mathbf{L} = \\mathbf{X} \\wedge \\mathbf{P}\\) satisfies \\([L_i,L_j] = i\\hbar\\epsilon_{ijk}L_k\\). General angular momentum operators \\(\\mathbf{J}\\) analyzed algebraically (same raising/lowering technique as harmonic oscillator). Eigenvalues: \\(J^2 \\to j(j+1)\\hbar^2\\), \\(J_3 \\to m\\hbar\\) with \\(m \\in \\{-j,\\ldots,j\\}\\). Orbital case: \\(j = l \\in \\mathbb{Z}_{\\geq 0}\\), spherical harmonics \\(Y_l^m\\).",
    "sec9": "The hydrogen atom. Central potentials separate in spherical coordinates: angular part gives spherical harmonics, radial part gives the radial Schr\u00f6dinger equation. For Coulomb potential \\(V = -e^2/r\\), energies are \\(E_n = -m_ee^4/(2\\hbar^2n^2)\\), reproducing Rydberg\u2019s empirical formula. Degeneracy \\(n^2\\) from hidden symmetry.",
    "sec10": "Quantum key distribution. Application of quantum mechanics to cryptography. The BB84 protocol uses the measurement postulate and no-cloning theorem to establish secure communication. Eavesdropping disturbs quantum states, making interception detectable."
  }
});
