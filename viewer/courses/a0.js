// A0 Linear Algebra — Course metadata for multi-course viewer
// 118 items across 9 sections + 2 appendices

VIEWER.registerCourse({
  key: 'a0',
  code: 'A0',
  title: 'Linear Algebra',
  term: 'Michaelmas',
  year: 2024,
  instructor: 'Ulrike Tillmann, Alan Lauder, Andrew Dancer',
  items: 118,
  path: '../Part_A/Michaelmas/A0_Linear_Algebra/index.html',
  envNames: {
// Section 1: Vector Spaces and Linear Maps
  'def-1.1':  'Field',
  'ex-1.2':   'Examples of fields',
  'def-1.3':  'Vector space',
  'def-1.4':  'Linear independence, spanning, basis',
  'ex-1.5':   'Examples of vector spaces',
  'def-1.6':  'Linear transformation and isomorphism',
  'ex-1.7':   'Examples of linear maps',
  'thm-1.8':  'Hom(V,W) isomorphic to matrices',

  // Section 2: Rings and Polynomials
  'def-2.1':  'Ring',
  'ex-2.2':   'Examples of rings',
  'def-2.3':  'Ring homomorphism',
  'ex-2.4':   'Hom(V,V) isomorphic to matrix ring',
  'def-2.5':  'Ideal',
  'ex-2.6':   'Examples of ideals',
  'thm-2.7':  'First Isomorphism Theorem (rings)',
  'thm-2.8':  'Division algorithm for polynomials',
  'cor-2.9':  'Factor theorem',
  'cor-2.10': 'Degree bound on roots',
  'prop-2.11':'Bézout\'s identity for polynomials',
  'lem-2.12': 'Existence of annihilating polynomial',
  'def-2.13': 'Minimal polynomial',
  'thm-2.14': 'Minimal polynomial divides annihilators',
  'def-2.15': 'Characteristic polynomial',
  'lem-2.16': 'Characteristic polynomial expansion',
  'def-2.17': 'Eigenvalue and eigenvector',
  'thm-2.18': 'Eigenvalue equivalences',
  'def-2.19': 'Minimal polynomial of a transformation',
  'def-2.20': 'Characteristic polynomial of a transformation',
  'def-2.21': 'Algebraically closed field',
  'thm-2.22': 'Fundamental Theorem of Algebra',
  'def-2.23': 'Algebraic closure',
  'thm-2.24': 'Existence of algebraic closure',

  // Section 3: Quotient Spaces
  'lem-3.1':  'Quotient space',
  'prop-3.2': 'Basis for quotient space',
  'prop-3.3': 'Extending quotient basis to full basis',
  'ex-3.4':   'Even/odd polynomial quotient',
  'cor-3.5':  'Dimension formula for quotients',
  'thm-3.6':  'First Isomorphism Theorem (vector spaces)',
  'thm-3.7':  'Rank–Nullity Theorem',
  'lem-3.8':  'Induced map on quotients',
  'thm-3.9':  'Block matrix decomposition',,

// =============================================================================

// =============================================================================
// ENV_NAMES — Short descriptive name for each item (2-6 words)
// =============================================================================

// Section 4: Triangular Form and the Cayley-Hamilton Theorem
'def-4.1': 'T-invariant subspace',
'ex-4.2': 'Examples of invariant subspaces',
'prop-4.3': 'Characteristic polynomial of restriction',
'def-4.4': 'Upper triangular matrix',
'thm-4.5': 'Triangular form theorem',
'cor-4.6': 'Similar to upper triangular',
'prop-4.7': 'Product of diagonal factors vanishes',
'thm-4.8': 'Cayley-Hamilton Theorem',
'ex-4.9': 'Cayley-Hamilton 2x2 example',
'ex-4.10': 'Minimal polynomial determination',

// Section 5: The Primary Decomposition Theorem
'prop-5.1': 'Coprime kernel decomposition',
'thm-5.2': 'Primary Decomposition Theorem',
'prop-5.3': 'Structure of m_T and chi_T',
'thm-5.4': 'Diagonalisability criterion',
'ex-5.5': 'Projection characterisation',
'ex-5.6': 'Diagonalisability over different fields',

// Section 6: Jordan Normal Form
'thm-6.1': 'Jordan form for nilpotent maps',
'ex-6.2': 'Nilpotent Jordan form example',
'cor-6.3': 'Jordan blocks for single eigenvalue',
'thm-6.4': 'Jordan Normal Form Theorem',
'ex-6.5': 'Jordan form computation example',

// Section 7: Dual Spaces
'def-7.1': 'Dual space and linear functionals',
'ex-7.2': 'Examples of linear functionals',
'thm-7.3': 'Dual basis theorem',
'ex-7.4': 'Examples of dual spaces',
'thm-7.5': 'Natural isomorphism V to V\'\'',
'def-7.6': 'Annihilator',
'prop-7.7': 'Annihilator is a subspace',
'thm-7.8': 'Dimension of annihilator',
'thm-7.9': 'Annihilator properties',
'thm-7.10': 'Double annihilator theorem',
'thm-7.11': 'Annihilator-quotient duality',
'def-7.12': 'Dual map',
'prop-7.13': 'Dual map is linear',
'thm-7.14': 'Hom(V,W) isomorphic to Hom(W\',V\')',
'thm-7.15': 'Matrix transpose is dual map matrix',


// =============================================================================,

// Section 8: Inner Product Spaces
  'def-8.1':  'Bilinear form',
  'ex-8.2':   'Bilinear form examples',
  'def-8.3':  'Sesquilinear form',
  'ex-8.4':   'Sesquilinear form from matrix',
  'prop-8.5': 'Orthogonal vectors linearly independent',
  'cor-8.6':  'Existence of orthonormal basis',
  'thm-8.7':  'Inner product isomorphism V to V\'',
  'def-8.8':  'Orthogonal complement',
  'prop-8.9': 'Orthogonal complement is subspace',
  'prop-8.10':'Properties of orthogonal complements',
  'prop-8.11':'Orthogonal complement maps to annihilator',
  'ex-8.12':  'Gram-Schmidt polynomial example',
  'def-8.13': 'Adjoint map',
  'lem-8.14': 'Uniqueness of adjoint',
  'thm-8.15': 'Existence of adjoint',
  'prop-8.16':'Matrix of adjoint',
  'prop-8.17':'Properties of adjoint',
  'def-8.18': 'Self-adjoint map',
  'lem-8.19': 'Eigenvalues of self-adjoint are real',
  'lem-8.20': 'Self-adjoint preserves complements',
  'thm-8.21': 'Spectral theorem (self-adjoint)',
  'def-8.22': 'Orthogonal and unitary transformations',
  'thm-8.23': 'Equivalent characterisations of isometries',
  'prop-8.24':'Length determines inner product',
  'def-8.25': 'O(n), SO(n), U(n), SU(n)',
  'lem-8.26': 'Eigenvalues of isometries',
  'cor-8.27': 'Determinant of isometries',
  'lem-8.28': 'Invariant complement for isometries',
  'thm-8.29': 'Spectral theorem (unitary)',
  'cor-8.30': 'Unitary diagonalisation',
  'ex-8.31':  'Classification of O(2)',
  'thm-8.32': 'Real orthogonal normal form',

  // Section 9: Singular Value Decomposition
  'thm-9.1':  'Singular value decomposition',
  'cor-9.2':  'Polar decomposition',

  // Appendix B: Normal Transformations
  'def-B.1':  'Normal transformation',
  'ex-B.2':   'Examples of normal transformations',
  'lem-B.3':  'Properties of normal transformations',
  'thm-B.4':  'Spectral theorem (normal)',
  'thm-B.5':  'Spectral decomposition (normal)',
  'thm-B.6':  'Simultaneous diagonalisation',
  'prop-B.7': 'Jordan block powers',
},
  guideDescs: {
// Section 1
  'def-1.1':
    'A field is a set with addition and multiplication such that both form abelian groups (excluding 0 for multiplication) and distributivity holds. Its characteristic is the smallest p with 1+1+...+1 (p times) = 0, or zero if no such p exists; if it exists, p is prime.',

  'ex-1.2':
    'Characteristic 0 examples: Q, Q[i], R, C. Characteristic p example: F_p = {0,...,p-1} with modular arithmetic. These are the fields over which we build vector spaces throughout the course.',

  'def-1.3':
    'A vector space over F is an abelian group (V,+,0) with scalar multiplication satisfying distributivity, associativity with field multiplication, and 1·v = v. This is the fundamental object of study in linear algebra.',

  'def-1.4':
    'Three interconnected concepts: a set S is linearly independent if no non-trivial linear combination gives zero; spanning if every vector is a linear combination from S; a basis if both. The basis size is the dimension of V.',

  'ex-1.5':
    'Key examples: F^n with standard basis, F[x] with {1,x,x^2,...}, and the sequence space R^N where the standard vectors span only a proper subspace. The last illustrates subtleties in infinite dimensions.',

  'def-1.6':
    'A linear map T: V -> W satisfies T(av + v\') = aT(v) + T(v\'). A bijective linear map is an isomorphism. Linear maps are the structure-preserving morphisms between vector spaces.',

  'ex-1.7':
    'Multiplication by x on R[x] is an injective linear map; the space Hom(V,W) of all linear maps V -> W is itself a vector space. Linear maps on finite-dimensional spaces are determined by their values on a basis and encoded by matrices.',

  'thm-1.8':
    'The assignment T -> [T] is an isomorphism from Hom(V,W) to (m x n)-matrices over F that sends composition to matrix multiplication. Change of basis is conjugation: [T]_{B\'} = P^{-1}[T]_B P. This is the bridge between abstract maps and concrete computation.',

  // Section 2
  'def-2.1':
    'A ring is a set with addition (forming an abelian group) and an associative multiplication satisfying both distributive laws. It is commutative if ab = ba for all elements. Rings generalise fields by dropping the requirement that non-zero elements have multiplicative inverses.',

  'ex-2.2':
    'Fields are commutative rings; Z, Z[i], F[x] are commutative. M_n(F) and Hom(V,V) are non-commutative for dimension > 1. The subring F[A] of polynomials in a matrix A is always commutative.',

  'def-2.3':
    'A ring homomorphism preserves both addition and multiplication. A bijective one is an isomorphism. This is the correct notion of structure-preserving map between rings.',

  'ex-2.4':
    'From Theorem 1.8 with W = V and B\' = B, the map T -> [T]_B is a ring isomorphism from End(V) = Hom(V,V) to M_n(F). This shows abstract endomorphisms and matrices are the same algebraic object.',

  'def-2.5':
    'An ideal I of a ring R is a non-empty subset closed under subtraction and under multiplication by any ring element from either side. Ideals are the ring-theoretic analogue of normal subgroups, enabling quotient constructions.',

  'ex-2.6':
    'mZ is an ideal in Z, and every ideal in Z has this form (Z is a PID). Diagonal matrices in M_n(R) form a subring but not an ideal for n > 1. Cosets R/I inherit a ring structure when I is an ideal.',

  'thm-2.7':
    'For a ring homomorphism phi: R -> S, the kernel is an ideal, the image is a subring, and R/ker(phi) is isomorphic to Im(phi). This is the fundamental structural result connecting homomorphisms and quotient rings.',

  'thm-2.8':
    'Given f, g in F[x] with g non-zero, there exist unique q, r with f = qg + r and deg r < deg g. This division algorithm is proved by induction on deg f - deg g and is the engine behind unique factorisation in F[x].',

  'cor-2.9':
    'If f(a) = 0 then (x - a) divides f(x). This follows immediately from the division algorithm: divide f by (x - a) and evaluate the remainder at a to see it must vanish.',

  'cor-2.10':
    'A non-zero polynomial of degree at most n has at most n roots. This follows by induction using the Factor Theorem: each root contributes a linear factor.',

  'prop-2.11':
    'For non-zero a, b in F[x] with gcd c, there exist s, t in F[x] with as + bt = c (Bézout\'s identity). Proved by induction using the division algorithm, it shows F[x] is a principal ideal domain.',

  'lem-2.12':
    'Every n x n matrix A has a non-zero annihilating polynomial f with f(A) = 0. The proof uses dim M_n(F) = n^2: the powers {I, A, ..., A^{n^2}} must be linearly dependent. This guarantees the minimal polynomial exists.',

  'def-2.13':
    'The minimal polynomial m_A(x) is the monic polynomial of least degree annihilating A. It is the canonical generator of ker(E_A) where E_A: F[x] -> M_n(F) evaluates polynomials at A.',

  'thm-2.14':
    'The minimal polynomial m_A divides every annihilating polynomial, and is unique. Proof: divide f by m_A using the division algorithm; the remainder annihilates A but has smaller degree, so must be zero.',

  'def-2.15':
    'The characteristic polynomial is chi_A(x) = det(A - xI). It is a degree-n polynomial whose roots are exactly the eigenvalues of A.',

  'lem-2.16':
    'The characteristic polynomial has the form (-1)^n x^n + (-1)^{n-1} tr(A) x^{n-1} + ... + det A. The leading coefficient is (-1)^n, the next involves the trace, and the constant term is the determinant.',

  'def-2.17':
    'An eigenvalue lambda of A is a scalar for which Av = lambda v for some non-zero eigenvector v. Eigenvalues are the roots of the characteristic polynomial and encode the essential spectral information of A.',

  'thm-2.18':
    'Lambda is an eigenvalue of A iff it is a root of chi_A iff it is a root of m_A. The proof chains: chi_A(lambda)=0 iff A - lambda I is singular iff there is an eigenvector; the link to m_A uses minimality in both directions.',

  'def-2.19':
    'The minimal polynomial m_T of a linear transformation T: V -> V is defined as m_A for any matrix representation A = [T]_B. Since similar matrices have the same minimal polynomial, m_T is basis-independent.',

  'def-2.20':
    'The characteristic polynomial chi_T is defined as chi_A for any matrix A = [T]_B. Since det is invariant under conjugation, chi_T is independent of the choice of basis.',

  'def-2.21':
    'A field F is algebraically closed if every non-constant polynomial in F[x] has a root in F. Equivalently, every polynomial splits completely into linear factors over F.',

  'thm-2.22':
    'The complex numbers C are algebraically closed: every non-constant polynomial in C[x] has a root. The proof (via complex analysis: 1/f would be entire and bounded) is beyond this course.',

  'def-2.23':
    'An algebraic closure F-bar of F is a minimal algebraically closed field containing F. It provides a universal splitting field for all polynomials over F.',

  'thm-2.24':
    'Every field F has an algebraic closure F-bar. The proof is beyond this course, but the result is used to extend arguments (e.g., Cayley–Hamilton) to arbitrary fields by working over F-bar.',

  // Section 3
  'lem-3.1':
    'The set of cosets V/U = {v + U | v in V} forms a vector space with (v+U)+(w+U) = (v+w)+U and a(v+U) = av+U. Well-definedness requires checking that representative choices do not matter, which uses the subspace property of U.',

  'prop-3.2':
    'If E is a basis for U extended to a basis B of V, then the cosets of B\\E form a basis for V/U. This gives a concrete method for computing quotient spaces and their dimensions.',

  'prop-3.3':
    'Conversely, if E is a basis for U and F-bar = {v+U : v in F} is a basis for V/U, then E union F is a basis for V. This is the converse to Proposition 3.2 and is used in the triangularisation theorem.',

  'ex-3.4':
    'V = F[x], U = even polynomials with basis {1, x^2, x^4, ...}. The quotient V/U is isomorphic to odd polynomials with basis {x+U, x^3+U, ...}. This illustrates the quotient basis construction concretely.',

  'cor-3.5':
    'dim(V) = dim(U) + dim(V/U) for finite-dimensional V. Immediate from Proposition 3.2: the basis of V is the disjoint union of bases for U and V/U.',

  'thm-3.6':
    'For a linear map T: V -> W, the induced map V/ker(T) -> Im(T) sending v+ker(T) to T(v) is an isomorphism. This is the vector space First Isomorphism Theorem, central to the structure theory.',

  'thm-3.7':
    'dim(V) = dim(ker T) + dim(Im T) for any linear map T on a finite-dimensional domain. The proof applies the dimension formula for quotients to U = ker(T) and then uses the First Isomorphism Theorem.',

  'lem-3.8':
    'The formula T-bar(v+A) = T(v)+B defines a well-defined linear quotient map V/A -> W/B if and only if T(A) subseteq B. This criterion is the key tool for the block decomposition theorem.',

  'thm-3.9':
    'If T: V -> W satisfies T(A) subseteq B for subspaces A, B, then the matrix of T decomposes as a 2x2 block upper-triangular matrix with the restricted map T|_A in the top-left and the induced quotient map T-bar in the bottom-right. This is the basis for triangularisation arguments.',,

// =============================================================================

// =============================================================================
// ENV_NAMES — Short descriptive name for each item (2-6 words)
// =============================================================================

// Section 4: Triangular Form and the Cayley-Hamilton Theorem
'def-4.1': 'T-invariant subspace',
'ex-4.2': 'Examples of invariant subspaces',
'prop-4.3': 'Characteristic polynomial of restriction',
'def-4.4': 'Upper triangular matrix',
'thm-4.5': 'Triangular form theorem',
'cor-4.6': 'Similar to upper triangular',
'prop-4.7': 'Product of diagonal factors vanishes',
'thm-4.8': 'Cayley-Hamilton Theorem',
'ex-4.9': 'Cayley-Hamilton 2x2 example',
'ex-4.10': 'Minimal polynomial determination',

// Section 5: The Primary Decomposition Theorem
'prop-5.1': 'Coprime kernel decomposition',
'thm-5.2': 'Primary Decomposition Theorem',
'prop-5.3': 'Structure of m_T and chi_T',
'thm-5.4': 'Diagonalisability criterion',
'ex-5.5': 'Projection characterisation',
'ex-5.6': 'Diagonalisability over different fields',

// Section 6: Jordan Normal Form
'thm-6.1': 'Jordan form for nilpotent maps',
'ex-6.2': 'Nilpotent Jordan form example',
'cor-6.3': 'Jordan blocks for single eigenvalue',
'thm-6.4': 'Jordan Normal Form Theorem',
'ex-6.5': 'Jordan form computation example',

// Section 7: Dual Spaces
'def-7.1': 'Dual space and linear functionals',
'ex-7.2': 'Examples of linear functionals',
'thm-7.3': 'Dual basis theorem',
'ex-7.4': 'Examples of dual spaces',
'thm-7.5': 'Natural isomorphism V to V\'\'',
'def-7.6': 'Annihilator',
'prop-7.7': 'Annihilator is a subspace',
'thm-7.8': 'Dimension of annihilator',
'thm-7.9': 'Annihilator properties',
'thm-7.10': 'Double annihilator theorem',
'thm-7.11': 'Annihilator-quotient duality',
'def-7.12': 'Dual map',
'prop-7.13': 'Dual map is linear',
'thm-7.14': 'Hom(V,W) isomorphic to Hom(W\',V\')',
'thm-7.15': 'Matrix transpose is dual map matrix',


// =============================================================================
// GUIDE_DESCS — 1-3 sentence description for each item
// =============================================================================

// Section 4: Triangular Form and the Cayley-Hamilton Theorem
'def-4.1': 'A subspace U of V is T-invariant if T(U) is contained in U. Invariance under T and S implies invariance under sums, compositions, and any polynomial in T, enabling induced maps on quotients.',
'ex-4.2': 'Eigenspaces V_lambda = ker(T - lambda I) and kernels ker(g(T)) for any polynomial g are T-invariant. These are the fundamental building blocks for decomposing V into T-stable pieces.',
'prop-4.3': 'If U is T-invariant, then the characteristic polynomial of T equals the product of the characteristic polynomials of the restriction T|_U and the induced quotient map. This is proved using the block triangular matrix from Theorem 3.9.',
'def-4.4': 'An n x n matrix A = (a_ij) is upper triangular if a_ij = 0 for all i > j. The diagonal entries of an upper triangular matrix are its eigenvalues, counted with multiplicity.',
'thm-4.5': 'If chi_T is a product of linear factors (automatic over algebraically closed fields), then there exists a basis making T upper triangular. Proved by induction on dim(V), peeling off one eigenvalue at a time via quotients.',
'cor-4.6': 'Matrix reformulation: if chi_A splits into linear factors, then A is similar to an upper triangular matrix via some invertible P. This is the change-of-basis version of the Triangular Form Theorem.',
'prop-4.7': 'For an upper triangular matrix with diagonal entries lambda_1, ..., lambda_n, the product of all (A - lambda_i I) equals zero. The key observation is that each factor maps span(e_1,...,e_i) into span(e_1,...,e_{i-1}).',
'thm-4.8': 'The Cayley-Hamilton Theorem: chi_T(T) = 0 for any linear map T on a finite-dimensional space. Hence m_T divides chi_T. The proof works over the algebraic closure and combines Corollary 4.6 with Proposition 4.7.',
'ex-4.9': 'For a 2x2 matrix with chi_A(x) = x^2 - x + 2, direct computation verifies A^2 - A + 2I = 0. Since chi_A has distinct roots, the minimal and characteristic polynomials coincide.',
'ex-4.10': 'A 4x4 block diagonal matrix with chi_A = (1-x)^2(2-x)^2. Systematic testing of divisors of chi_A shows m_A = (x-1)^2(x-2): it annihilates A and no proper divisor does.',

// Section 5: The Primary Decomposition Theorem
'prop-5.1': 'If f = ab with gcd(a,b) = 1 annihilates T, then V = ker(a(T)) + ker(b(T)) is a T-invariant direct sum. When f = m_T, the minimal polynomial restricts to a and b on the respective summands. Proof uses Bezout\'s identity as + bt = 1.',
'thm-5.2': 'The Primary Decomposition Theorem: if m_T = f_1^{q_1} ... f_r^{q_r} with distinct monic irreducibles f_i, then V decomposes as a T-invariant direct sum of the generalised eigenspaces W_i = ker(f_i(T)^{q_i}), with m_{T|_{W_i}} = f_i^{q_i}. Proved by induction using Proposition 5.1.',
'prop-5.3': 'The irreducible factors of m_T and chi_T are identical (possibly with different multiplicities). Specifically chi_T = +/- f_1^{n_1} ... f_r^{n_r} with n_i >= q_i, where f_i^{q_i} are the irreducible factors of m_T.',
'thm-5.4': 'T is diagonalisable if and only if m_T factors as a product of distinct linear polynomials. The forward direction uses the diagonal form to construct a small annihilating polynomial; the converse applies Primary Decomposition to get a direct sum of eigenspaces.',
'ex-5.5': 'A projection P satisfies P^2 = P, so P(P - I) = 0. The minimal polynomial is x, (x-1), or x(x-1), corresponding to P = 0, P = I, or a nontrivial decomposition V = E_0 + E_1.',
'ex-5.6': 'The matrix with chi_A = x^2 - 2x + 2 behaves differently over different fields: not triangularisable over R, diagonalisable over C (roots 1+/-i), and diagonalisable over F_5 (roots 3, 4).',

// Section 6: Jordan Normal Form
'thm-6.1': 'If T is nilpotent with m_T(x) = x^m, there exists a basis giving a block diagonal matrix of nilpotent Jordan blocks J_i (zeros on diagonal, ones on superdiagonal). The proof constructs the basis by working down through the chain of kernels ker(T) < ker(T^2) < ... < V.',
'ex-6.2': 'A 3x3 nilpotent matrix with A^2 = 0, m_A = x^2, chi_A = -x^3. The kernel chain has dimension jumps 2, 1, yielding one 2x2 Jordan block and one 1x1 block.',
'cor-6.3': 'When m_T(x) = (x - lambda)^m, we apply the nilpotent theorem to T - lambda I. The resulting Jordan blocks are J_i(lambda) = lambda I_i + J_i, with lambda on the diagonal and ones on the superdiagonal.',
'thm-6.4': 'The Jordan Normal Form Theorem: if m_T splits into linear factors (x - lambda_j)^{m_j}, then T has a Jordan form — a block diagonal matrix of Jordan blocks J_i(lambda_j). Proved by combining Primary Decomposition with Corollary 6.3. The Jordan form is unique up to block ordering.',
'ex-6.5': 'A 3x3 matrix with chi_T = (2-x)^3 and m_T = (x-2)^3. The kernel dimensions increase by exactly 1 at each step, giving a single 3x3 Jordan block J_3(2).',

// Section 7: Dual Spaces
'def-7.1': 'The dual V\' = Hom(V, F) is the vector space of linear maps from V to the ground field F, called linear functionals. It captures all "measurement" operations on V.',
'ex-7.2': 'Integration on C([0,1]) is a linear functional on the space of continuous functions. For the space of finite sequences, any infinite sequence b defines a functional via the dot product sum a_i b_i.',
'thm-7.3': 'Every basis B = {e_1,...,e_n} has a dual basis B\' = {e_1\',...,e_n\'} with e_i\'(e_j) = delta_{ij}. This makes dim V = dim V\' and gives a (basis-dependent) isomorphism V to V\'.',
'ex-7.4': 'For R^n, the dual is naturally the space of row vectors (R^n)^t. For the space of finite sequences, the dual is all infinite sequences — so V is not isomorphic to V\', showing finite-dimensionality is necessary in Theorem 7.3.',
'thm-7.5': 'The evaluation map v -> E_v (where E_v(f) = f(v)) gives a natural (basis-independent) isomorphism from V to V\'\' = (V\')\'. Naturality distinguishes this from the basis-dependent isomorphism V to V\' of Theorem 7.3.',
'def-7.6': 'The annihilator U^0 of a subspace U is the set of all linear functionals in V\' that vanish on U: U^0 = {f in V\' : f(u) = 0 for all u in U}.',
'prop-7.7': 'The annihilator U^0 is a subspace of V\'. Closure under linear combinations follows directly from the linearity of functionals.',
'thm-7.8': 'dim(U^0) = dim(V) - dim(U). Proved by extending a basis for U to a basis for V: the last n - m dual basis vectors span U^0.',
'thm-7.9': 'Inclusion reversal: U in W implies W^0 in U^0. Sum-intersection duality: (U+W)^0 = U^0 cap W^0 and U^0 + W^0 = (U cap W)^0 (equality in finite dimension). The dimension count uses the familiar dim(U+W) formula.',
'thm-7.10': 'Under the natural map V -> V\'\', U maps isomorphically onto U^{00} = (U^0)^0, the double annihilator. This says "annihilating twice recovers U" and follows from the dimension formula dim(U^{00}) = dim(U).',
'thm-7.11': 'The annihilator U^0 is naturally isomorphic to (V/U)\', the dual of the quotient. The isomorphism sends f in U^0 to the well-defined functional f-bar on V/U given by f-bar(v+U) = f(v). This links annihilators to quotient duality.',
'def-7.12': 'The dual (or transpose) map T\' : W\' -> V\' of a linear map T : V -> W is defined by T\'(f) = f composed with T. It reverses the direction: a map V -> W dualises to W\' -> V\'.',
'prop-7.13': 'The dual map T\' is linear. Verified by expanding T\'(f + lambda g)(v) using linearity of composition and of the functionals.',
'thm-7.14': 'The assignment T -> T\' is a natural isomorphism Hom(V,W) -> Hom(W\',V\'). Linearity in T is checked by triple unwinding; injectivity uses the double dual; surjectivity follows by dimension counting.',
'thm-7.15': 'The matrix of the dual map T\' with respect to dual bases is the transpose of the matrix of T: (B_W[T]_{B_V})^t = B_V\'[T\']_{B_W\'}. This gives the algebraic meaning of the matrix transpose.',


// =============================================================================,

// Section 8: Inner Product Spaces
  'def-8.1':  'A bilinear form F: V x V -> F is linear in each argument. Key properties: symmetric (F(v,w) = F(w,v)), non-degenerate (F(v,w) = 0 for all v implies w = 0), and positive definite (F(v,v) > 0 for v != 0 over R). A real inner product space has a bilinear, symmetric, positive definite form.',
  'ex-8.2':   'Three key examples: (1) Minkowski space on R^4 is bilinear and symmetric but not positive definite; (2) the dot product on R^n is the standard inner product; (3) the L^2 inner product on C[0,1] given by integrating fg is positive definite.',
  'def-8.3':  'A sesquilinear form F: V x V -> C is linear in the second argument and conjugate-linear in the first: F(bar{lambda} v, w) = lambda F(v, w). Conjugate symmetry means F(v,w) = bar{F(w,v)}, forcing F(v,v) in R. A complex inner product space has a sesquilinear, conjugate symmetric, positive definite form.',
  'ex-8.4':   'On C^n, F(v,w) = bar{v}^t A w is sesquilinear. It is conjugate symmetric iff A = bar{A}^t (Hermitian matrix), and non-degenerate iff A is non-singular.',
  'prop-8.5': 'If w_1, ..., w_n are mutually orthogonal and nonzero in an inner product space, they are linearly independent. Proof: take inner product of a dependence relation with each w_j to isolate its coefficient.',
  'cor-8.6':  'Every finite dimensional inner product space over R or C has an orthonormal basis, obtained by applying the Gram-Schmidt process to any given basis. Moreover, any orthonormal basis for a subspace can be extended to one for V.',
  'thm-8.7':  'The map phi: V -> V\' sending v to <v, .> is a natural injective R-linear map. When V is finite dimensional, phi is an isomorphism. This identifies the dual space V\' with V itself via the inner product.',
  'def-8.8':  'The orthogonal complement U^perp of a subspace U in an inner product space V is {v in V : <u,v> = 0 for all u in U}. It collects all vectors perpendicular to U.',
  'prop-8.9': 'The orthogonal complement U^perp is always a subspace of V. Proof by checking closure under addition and scalar multiplication using linearity of the inner product.',
  'prop-8.10':'Five key properties: (1) U cap U^perp = {0}; (2) U + U^perp = V in finite dimension; (3) (U+W)^perp = U^perp cap W^perp; (4) (U cap W)^perp contains U^perp + W^perp (equality in finite dim); (5) U subset (U^perp)^perp (equality in finite dim). Properties 2, 4, 5 may fail in infinite dimension.',
  'prop-8.11':'Under the isomorphism phi: V -> V\' (v -> <v,.>), the orthogonal complement U^perp maps isomorphically to the annihilator U^0. This bridges the inner product and dual space viewpoints.',
  'ex-8.12':  'Gram-Schmidt applied to the polynomial inner product <f,g> = f(1)g(1) + f(2)g(2) + f(3)g(3) on degree-at-most-2 polynomials. Finds the orthogonal projection of t^2 onto span{1,t}, yielding f = 4t - 10/3.',
  'def-8.13': 'The adjoint T* of a linear map T: V -> V satisfies <v, T(w)> = <T*(v), w> for all v, w in V. It is the inner-product analogue of the dual map.',
  'lem-8.14': 'The adjoint T* is unique if it exists: if two maps both satisfy the adjoint identity, their difference pairs to zero with every vector, so they are equal by non-degeneracy.',
  'thm-8.15': 'For finite dimensional V, the adjoint T* always exists and is linear. Constructed using the surjectivity of the isomorphism phi: V -> V\' and the functional <v, T(.)>.',
  'prop-8.16':'With respect to an orthonormal basis B, the matrix of the adjoint is the conjugate transpose: [T*]_B = bar{[T]_B}^t. Fails if B is not orthonormal.',
  'prop-8.17':'Five algebraic properties of the adjoint: (S+T)* = S*+T*, (lambda T)* = bar{lambda} T*, (ST)* = T*S*, (T*)* = T, and the minimal polynomial of T* is the conjugate of that of T.',
  'def-8.18': 'A linear map T is self-adjoint if T = T*. With respect to an orthonormal basis, this means the matrix is Hermitian (or real symmetric if K = R).',
  'lem-8.19': 'Every eigenvalue of a self-adjoint operator is real. Proof: if Tw = lambda w, comparing <w, Tw> = lambda <w,w> with <T*w, w> = bar{lambda} <w,w> forces lambda = bar{lambda}.',
  'lem-8.20': 'If T is self-adjoint and U is T-invariant, then U^perp is also T-invariant. Key step: <u, Tw> = <T*u, w> = <Tu, w> = 0 for u in U, w in U^perp.',
  'thm-8.21': 'The spectral theorem for self-adjoint maps: there exists an orthonormal basis of eigenvectors. Proved by induction on dimension, using the existence of a real eigenvalue (Lemma 8.19) and invariance of the orthogonal complement (Lemma 8.20).',
  'def-8.22': 'A linear map T is orthogonal (K=R) or unitary (K=C) if T* = T^{-1}. Equivalently, its matrix w.r.t. an orthonormal basis satisfies bar{A}^t A = I.',
  'thm-8.23': 'Three equivalent conditions: (1) T*=T^{-1}; (2) T preserves inner products; (3) T preserves lengths. The equivalence (3)->(2) uses the polarisation identity (Proposition 8.24). Isometries are also characterised by preserving distance.',
  'prop-8.24':'The length function determines the inner product. Uses the polarisation identity: Re<v,w> = (||v+w||^2 - ||v||^2 - ||w||^2)/2 and Im<v,w> from ||v+iw||.',
  'def-8.25': 'The matrix groups O(n) = {A : A^t A = I}, SO(n) = O(n) cap {det=1}, U(n) = {A : bar{A}^t A = I}, SU(n) = U(n) cap {det=1}. These are the orthogonal, special orthogonal, unitary, and special unitary groups respectively.',
  'lem-8.26': 'Every eigenvalue lambda of an orthogonal or unitary transformation has |lambda| = 1. Proof: <v,v> = <Tv,Tv> = |lambda|^2 <v,v>.',
  'cor-8.27': 'For an orthogonal or unitary matrix A, |det A| = 1. Follows from det A being the product of eigenvalues, each of modulus 1.',
  'lem-8.28': 'If T*T = Id and U is T-invariant, then U^perp is T-invariant. The key point is that T^{-1} = T* is a polynomial in T (by the minimal polynomial), so U is also T^{-1}-invariant.',
  'thm-8.29': 'The spectral theorem for unitary maps: there exists an orthonormal basis of eigenvectors. Proved by induction, using algebraic closure of C for eigenvalue existence and Lemma 8.28 for invariance of U^perp.',
  'cor-8.30': 'Every unitary matrix A can be unitarily diagonalised: there exists P in U(n) with P^{-1}AP diagonal. Note: A in O(n) may not be diagonalisable over R.',
  'ex-8.31':  'Every element of O(2) is either a rotation R_theta (det = 1) or a reflection S_{theta/2} (det = -1). Rotations have eigenvalues e^{+/- i theta} (real only if theta = 0, pi); reflections have eigenvalues +/-1.',
  'thm-8.32': 'Real orthogonal normal form: every orthogonal T on a finite dimensional real inner product space has an orthonormal basis giving a block diagonal matrix with blocks I, -I, and 2x2 rotation matrices R_{theta_i} (theta_i != 0, pi). Proved via the self-adjoint map S = T + T^{-1}.',

  // Section 9: Singular Value Decomposition
  'thm-9.1':  'Every matrix A in F^{m x n} (m >= n) factors as A = U Sigma V*, where U has orthonormal columns, V is unitary, and Sigma = diag(sigma_1, ..., sigma_n) with sigma_1 >= ... >= sigma_n >= 0. Proved by diagonalising the Gram matrix A*A. Fundamental in computational mathematics for data compression and low-rank approximation.',
  'cor-9.2':  'Every matrix A in F^{m x n} with m >= n can be written as A = U_p H, where U_p has orthonormal columns and H = V Sigma V* is self-adjoint and positive semidefinite. Derived from the SVD by setting U_p = UV* and H = V Sigma V*.',

  // Appendix B: Normal Transformations (non-examinable)
  'def-B.1':  'A linear transformation T on a finite dimensional complex inner product space is normal if TT* = T*T. Both unitary and self-adjoint maps are normal, making this a common generalisation.',
  'ex-B.2':   'Key examples of normal transformations: unitary maps (T* = T^{-1}) and self-adjoint maps (T* = T) are both normal.',
  'lem-B.3':  'Four properties of normal T: (1) Tv = 0 iff T*v = 0; (2) T - lambda I is normal; (3) Tv = lambda v implies T*v = bar{lambda} v; (4) eigenvectors for distinct eigenvalues are orthogonal. These follow from ||Tv|| = ||T*v|| and the shift-invariance of normality.',
  'thm-B.4':  'Spectral theorem for normal maps: if T is normal on a complex finite dimensional inner product space, there exists an orthonormal basis of eigenvectors. Proved by induction, using the fact that both U and U^perp are T- and T*-invariant.',
  'thm-B.5':  'A normal T can be written as T = lambda_1 E_1 + ... + lambda_r E_r, where the E_i are orthogonal projections with E_1 + ... + E_r = I and E_i E_j = 0 for i != j. This is the spectral decomposition reformulation of Theorem B.4.',
  'thm-B.6':  'If S and T are commuting normal (symmetric) maps on a finite dimensional inner product space, there exists an orthonormal basis simultaneously diagonalising both. Uses the eigenspace decomposition for S, then diagonalises T on each eigenspace.',
  'prop-B.7': 'For a k x k Jordan block J_k(lambda), the n-th power applied to v_0 gives components v_n^{k-i} = sum_{j=0}^{i} C(n,j) lambda^{n-j} v_0^{k-i+j}. Proved by induction using the binomial identity.',
},
  guideOutline: {
'sec1':
    '1. Vector Spaces and Linear Maps — Recalls from Prelims the axiomatic definition of fields and vector spaces, the notions of linear independence, spanning, basis, and dimension, then develops linear maps, the matrix representation via Hom(V,W), and the change-of-basis formula. The central result is Theorem 1.8: linear maps and matrices are the same thing.',

  'sec1-1':
    '1.1 Vector spaces — Defines fields (with characteristic), vector spaces over a field, and the trio of linear independence, spanning sets, and bases. Examples range from F^n to polynomial rings and sequence spaces, illustrating finite and infinite dimensions.',

  'sec1-2':
    '1.2 Linear maps — Defines linear transformations and isomorphisms, shows Hom(V,W) is a vector space, introduces the matrix of a linear map with respect to ordered bases, and establishes the fundamental isomorphism Hom(V,W) ≅ M_{m×n}(F) preserving composition.',

  'sec2':
    '2. Rings and Polynomials — Introduces rings, ideals, and the First Isomorphism Theorem for rings, then develops the polynomial ring F[x] with its division algorithm. The second half applies polynomial evaluation to matrices, defining the minimal and characteristic polynomials and proving the eigenvalue equivalence theorem. An appendix introduces algebraically closed fields.',

  'sec2-1':
    '2.1 Rings — Defines rings (commutative and non-commutative), ring homomorphisms, ideals, quotient rings, and the First Isomorphism Theorem. Key examples: Z, F[x] (commutative), M_n(F) (non-commutative), and the evaluation subring F[A].',

  'sec2-2':
    '2.2 Polynomial rings — Proves the division algorithm for F[x], deduces the Factor Theorem and degree bound on roots, and establishes Bézout\'s identity. Together these show F[x] is a principal ideal domain.',

  'sec2-3':
    '2.3 Evaluating polynomials on matrices — Shows that f(x) -> f(A) is a ring homomorphism E_A: F[x] -> M_n(F) whose image is commutative. A dimension argument proves every matrix has a non-zero annihilating polynomial.',

  'sec2-4':
    '2.4 Minimal and characteristic polynomials — Defines m_A (the monic generator of ker E_A) and chi_A = det(A - xI), proves m_A divides every annihilator, and shows the eigenvalue equivalence: roots of chi_A = roots of m_A = eigenvalues. Extends both polynomials to linear transformations (basis-independent). Appendix defines algebraically closed fields and states the FTA.',

  'sec3':
    '3. Quotient Spaces — Constructs the quotient vector space V/U, proves the dimension formula dim V = dim U + dim(V/U), and establishes the First Isomorphism Theorem and Rank–Nullity. The section culminates in the block matrix decomposition for maps respecting a subspace, which is the foundation for triangularisation in Section 4.',,

// =============================================================================

// =============================================================================
// ENV_NAMES — Short descriptive name for each item (2-6 words)
// =============================================================================

// Section 4: Triangular Form and the Cayley-Hamilton Theorem
'def-4.1': 'T-invariant subspace',
'ex-4.2': 'Examples of invariant subspaces',
'prop-4.3': 'Characteristic polynomial of restriction',
'def-4.4': 'Upper triangular matrix',
'thm-4.5': 'Triangular form theorem',
'cor-4.6': 'Similar to upper triangular',
'prop-4.7': 'Product of diagonal factors vanishes',
'thm-4.8': 'Cayley-Hamilton Theorem',
'ex-4.9': 'Cayley-Hamilton 2x2 example',
'ex-4.10': 'Minimal polynomial determination',

// Section 5: The Primary Decomposition Theorem
'prop-5.1': 'Coprime kernel decomposition',
'thm-5.2': 'Primary Decomposition Theorem',
'prop-5.3': 'Structure of m_T and chi_T',
'thm-5.4': 'Diagonalisability criterion',
'ex-5.5': 'Projection characterisation',
'ex-5.6': 'Diagonalisability over different fields',

// Section 6: Jordan Normal Form
'thm-6.1': 'Jordan form for nilpotent maps',
'ex-6.2': 'Nilpotent Jordan form example',
'cor-6.3': 'Jordan blocks for single eigenvalue',
'thm-6.4': 'Jordan Normal Form Theorem',
'ex-6.5': 'Jordan form computation example',

// Section 7: Dual Spaces
'def-7.1': 'Dual space and linear functionals',
'ex-7.2': 'Examples of linear functionals',
'thm-7.3': 'Dual basis theorem',
'ex-7.4': 'Examples of dual spaces',
'thm-7.5': 'Natural isomorphism V to V\'\'',
'def-7.6': 'Annihilator',
'prop-7.7': 'Annihilator is a subspace',
'thm-7.8': 'Dimension of annihilator',
'thm-7.9': 'Annihilator properties',
'thm-7.10': 'Double annihilator theorem',
'thm-7.11': 'Annihilator-quotient duality',
'def-7.12': 'Dual map',
'prop-7.13': 'Dual map is linear',
'thm-7.14': 'Hom(V,W) isomorphic to Hom(W\',V\')',
'thm-7.15': 'Matrix transpose is dual map matrix',


// =============================================================================
// GUIDE_DESCS — 1-3 sentence description for each item
// =============================================================================

// Section 4: Triangular Form and the Cayley-Hamilton Theorem
'def-4.1': 'A subspace U of V is T-invariant if T(U) is contained in U. Invariance under T and S implies invariance under sums, compositions, and any polynomial in T, enabling induced maps on quotients.',
'ex-4.2': 'Eigenspaces V_lambda = ker(T - lambda I) and kernels ker(g(T)) for any polynomial g are T-invariant. These are the fundamental building blocks for decomposing V into T-stable pieces.',
'prop-4.3': 'If U is T-invariant, then the characteristic polynomial of T equals the product of the characteristic polynomials of the restriction T|_U and the induced quotient map. This is proved using the block triangular matrix from Theorem 3.9.',
'def-4.4': 'An n x n matrix A = (a_ij) is upper triangular if a_ij = 0 for all i > j. The diagonal entries of an upper triangular matrix are its eigenvalues, counted with multiplicity.',
'thm-4.5': 'If chi_T is a product of linear factors (automatic over algebraically closed fields), then there exists a basis making T upper triangular. Proved by induction on dim(V), peeling off one eigenvalue at a time via quotients.',
'cor-4.6': 'Matrix reformulation: if chi_A splits into linear factors, then A is similar to an upper triangular matrix via some invertible P. This is the change-of-basis version of the Triangular Form Theorem.',
'prop-4.7': 'For an upper triangular matrix with diagonal entries lambda_1, ..., lambda_n, the product of all (A - lambda_i I) equals zero. The key observation is that each factor maps span(e_1,...,e_i) into span(e_1,...,e_{i-1}).',
'thm-4.8': 'The Cayley-Hamilton Theorem: chi_T(T) = 0 for any linear map T on a finite-dimensional space. Hence m_T divides chi_T. The proof works over the algebraic closure and combines Corollary 4.6 with Proposition 4.7.',
'ex-4.9': 'For a 2x2 matrix with chi_A(x) = x^2 - x + 2, direct computation verifies A^2 - A + 2I = 0. Since chi_A has distinct roots, the minimal and characteristic polynomials coincide.',
'ex-4.10': 'A 4x4 block diagonal matrix with chi_A = (1-x)^2(2-x)^2. Systematic testing of divisors of chi_A shows m_A = (x-1)^2(x-2): it annihilates A and no proper divisor does.',

// Section 5: The Primary Decomposition Theorem
'prop-5.1': 'If f = ab with gcd(a,b) = 1 annihilates T, then V = ker(a(T)) + ker(b(T)) is a T-invariant direct sum. When f = m_T, the minimal polynomial restricts to a and b on the respective summands. Proof uses Bezout\'s identity as + bt = 1.',
'thm-5.2': 'The Primary Decomposition Theorem: if m_T = f_1^{q_1} ... f_r^{q_r} with distinct monic irreducibles f_i, then V decomposes as a T-invariant direct sum of the generalised eigenspaces W_i = ker(f_i(T)^{q_i}), with m_{T|_{W_i}} = f_i^{q_i}. Proved by induction using Proposition 5.1.',
'prop-5.3': 'The irreducible factors of m_T and chi_T are identical (possibly with different multiplicities). Specifically chi_T = +/- f_1^{n_1} ... f_r^{n_r} with n_i >= q_i, where f_i^{q_i} are the irreducible factors of m_T.',
'thm-5.4': 'T is diagonalisable if and only if m_T factors as a product of distinct linear polynomials. The forward direction uses the diagonal form to construct a small annihilating polynomial; the converse applies Primary Decomposition to get a direct sum of eigenspaces.',
'ex-5.5': 'A projection P satisfies P^2 = P, so P(P - I) = 0. The minimal polynomial is x, (x-1), or x(x-1), corresponding to P = 0, P = I, or a nontrivial decomposition V = E_0 + E_1.',
'ex-5.6': 'The matrix with chi_A = x^2 - 2x + 2 behaves differently over different fields: not triangularisable over R, diagonalisable over C (roots 1+/-i), and diagonalisable over F_5 (roots 3, 4).',

// Section 6: Jordan Normal Form
'thm-6.1': 'If T is nilpotent with m_T(x) = x^m, there exists a basis giving a block diagonal matrix of nilpotent Jordan blocks J_i (zeros on diagonal, ones on superdiagonal). The proof constructs the basis by working down through the chain of kernels ker(T) < ker(T^2) < ... < V.',
'ex-6.2': 'A 3x3 nilpotent matrix with A^2 = 0, m_A = x^2, chi_A = -x^3. The kernel chain has dimension jumps 2, 1, yielding one 2x2 Jordan block and one 1x1 block.',
'cor-6.3': 'When m_T(x) = (x - lambda)^m, we apply the nilpotent theorem to T - lambda I. The resulting Jordan blocks are J_i(lambda) = lambda I_i + J_i, with lambda on the diagonal and ones on the superdiagonal.',
'thm-6.4': 'The Jordan Normal Form Theorem: if m_T splits into linear factors (x - lambda_j)^{m_j}, then T has a Jordan form — a block diagonal matrix of Jordan blocks J_i(lambda_j). Proved by combining Primary Decomposition with Corollary 6.3. The Jordan form is unique up to block ordering.',
'ex-6.5': 'A 3x3 matrix with chi_T = (2-x)^3 and m_T = (x-2)^3. The kernel dimensions increase by exactly 1 at each step, giving a single 3x3 Jordan block J_3(2).',

// Section 7: Dual Spaces
'def-7.1': 'The dual V\' = Hom(V, F) is the vector space of linear maps from V to the ground field F, called linear functionals. It captures all "measurement" operations on V.',
'ex-7.2': 'Integration on C([0,1]) is a linear functional on the space of continuous functions. For the space of finite sequences, any infinite sequence b defines a functional via the dot product sum a_i b_i.',
'thm-7.3': 'Every basis B = {e_1,...,e_n} has a dual basis B\' = {e_1\',...,e_n\'} with e_i\'(e_j) = delta_{ij}. This makes dim V = dim V\' and gives a (basis-dependent) isomorphism V to V\'.',
'ex-7.4': 'For R^n, the dual is naturally the space of row vectors (R^n)^t. For the space of finite sequences, the dual is all infinite sequences — so V is not isomorphic to V\', showing finite-dimensionality is necessary in Theorem 7.3.',
'thm-7.5': 'The evaluation map v -> E_v (where E_v(f) = f(v)) gives a natural (basis-independent) isomorphism from V to V\'\' = (V\')\'. Naturality distinguishes this from the basis-dependent isomorphism V to V\' of Theorem 7.3.',
'def-7.6': 'The annihilator U^0 of a subspace U is the set of all linear functionals in V\' that vanish on U: U^0 = {f in V\' : f(u) = 0 for all u in U}.',
'prop-7.7': 'The annihilator U^0 is a subspace of V\'. Closure under linear combinations follows directly from the linearity of functionals.',
'thm-7.8': 'dim(U^0) = dim(V) - dim(U). Proved by extending a basis for U to a basis for V: the last n - m dual basis vectors span U^0.',
'thm-7.9': 'Inclusion reversal: U in W implies W^0 in U^0. Sum-intersection duality: (U+W)^0 = U^0 cap W^0 and U^0 + W^0 = (U cap W)^0 (equality in finite dimension). The dimension count uses the familiar dim(U+W) formula.',
'thm-7.10': 'Under the natural map V -> V\'\', U maps isomorphically onto U^{00} = (U^0)^0, the double annihilator. This says "annihilating twice recovers U" and follows from the dimension formula dim(U^{00}) = dim(U).',
'thm-7.11': 'The annihilator U^0 is naturally isomorphic to (V/U)\', the dual of the quotient. The isomorphism sends f in U^0 to the well-defined functional f-bar on V/U given by f-bar(v+U) = f(v). This links annihilators to quotient duality.',
'def-7.12': 'The dual (or transpose) map T\' : W\' -> V\' of a linear map T : V -> W is defined by T\'(f) = f composed with T. It reverses the direction: a map V -> W dualises to W\' -> V\'.',
'prop-7.13': 'The dual map T\' is linear. Verified by expanding T\'(f + lambda g)(v) using linearity of composition and of the functionals.',
'thm-7.14': 'The assignment T -> T\' is a natural isomorphism Hom(V,W) -> Hom(W\',V\'). Linearity in T is checked by triple unwinding; injectivity uses the double dual; surjectivity follows by dimension counting.',
'thm-7.15': 'The matrix of the dual map T\' with respect to dual bases is the transpose of the matrix of T: (B_W[T]_{B_V})^t = B_V\'[T\']_{B_W\'}. This gives the algebraic meaning of the matrix transpose.',


// =============================================================================
// GUIDE_OUTLINE — Section/subsection storyline summaries
// =============================================================================

'sec4': 'Section 4: Triangular Form and the Cayley-Hamilton Theorem. The central goal is to prove that chi_T(T) = 0. The strategy: define T-invariant subspaces, show chi_T factors through restriction and quotient (Prop 4.3), prove every map with a split characteristic polynomial can be triangularised (Thm 4.5), observe that the product of diagonal shifts vanishes for upper triangular matrices (Prop 4.7), and combine these over the algebraic closure to prove Cayley-Hamilton (Thm 4.8). As a consequence, m_T | chi_T, which constrains the structure of T.',

'sec5': 'Section 5: The Primary Decomposition Theorem. Building on Cayley-Hamilton and Bezout\'s identity for coprime polynomials, the section decomposes V into T-invariant generalised eigenspaces. Proposition 5.1 handles the coprime two-factor case; the Primary Decomposition Theorem (Thm 5.2) extends this by induction to arbitrary factorisations of m_T. Proposition 5.3 shows that m_T and chi_T share the same irreducible factors. The key application: T is diagonalisable iff m_T has distinct linear factors (Thm 5.4).',

'sec6': 'Section 6: Jordan Normal Form. The goal is to describe T on each primary component where m_T = (x - lambda)^m. Theorem 6.1 gives the Jordan form for nilpotent maps via an intricate inductive basis construction through the kernel filtration. Corollary 6.3 shifts from nilpotent to the single-eigenvalue case. The Jordan Normal Form Theorem (Thm 6.4) combines Primary Decomposition with the single-eigenvalue result: over an algebraically closed field, every matrix is similar to a block diagonal of Jordan blocks, unique up to ordering.',

'sec7': 'Section 7: Dual Spaces. Introduces the dual V\' = Hom(V,F) and develops the theory of duality. The dual basis theorem (Thm 7.3) establishes dim V = dim V\' and a basis-dependent isomorphism. The natural isomorphism V -> V\'\' (Thm 7.5) is the canonical, basis-free identification via evaluation maps. Section 7.1 develops annihilators: U^0 captures the functionals vanishing on U, with dim(U^0) = dim(V) - dim(U) and a clean annihilator-quotient duality U^0 = (V/U)\'. Section 7.2 introduces dual maps T\' = f -> f . T, proves T -> T\' is a natural isomorphism of Hom spaces, and shows the dual map matrix is the transpose of the original.',

'sec7-1': 'Section 7.1: Annihilators. The annihilator U^0 of a subspace U collects all functionals vanishing on U. Key results: dim(U^0) = dim(V) - dim(U) (Thm 7.8), inclusion reversal and sum/intersection duality (Thm 7.9), the double annihilator theorem U = U^{00} under the canonical embedding (Thm 7.10), and annihilator-quotient duality U^0 = (V/U)\' (Thm 7.11).',

'sec7-2': 'Section 7.2: Dual maps. The dual map T\' : W\' -> V\' sends f to f . T, reversing the direction of morphisms. T\' is linear (Prop 7.13), the assignment T -> T\' is a natural isomorphism of Hom spaces (Thm 7.14), and the matrix of T\' in dual bases is the transpose of the matrix of T (Thm 7.15). This gives the theoretical foundation for the matrix transpose.',,

'sec8': '8. Inner Product Spaces -- Introduces bilinear and sesquilinear forms, culminating in the definition of inner product spaces over R and C. Develops the Gram-Schmidt process, orthogonal complements, the adjoint map, and spectral theorems for self-adjoint, unitary, and orthogonal transformations. The final result (Theorem 8.32) gives the real orthogonal normal form with rotation blocks.',

  'sec8-1': '8.1 Gram-Schmidt orthonormalisation process -- Applies the Gram-Schmidt algorithm to produce an orthonormal basis from any given basis of a finite dimensional inner product space. Key consequence: every finite dimensional inner product space has an orthonormal basis (Corollary 8.6), and any orthonormal basis for a subspace extends to one for V.',

  'sec8-2': '8.2 Orthogonal complements and duals -- Establishes the isomorphism V -> V\' via the inner product (Theorem 8.7), defines the orthogonal complement U^perp, and proves its fundamental properties including the direct sum decomposition V = U + U^perp. Connects orthogonal complements to annihilators in dual space theory (Proposition 8.11).',

  'sec8-3': '8.3 Adjoints of maps -- Defines the adjoint T* satisfying <v, Tw> = <T*v, w>, proves existence and uniqueness in finite dimension, and shows [T*]_B = bar{[T]_B}^t for orthonormal B. Develops the theory of self-adjoint maps, proving eigenvalues are real (Lemma 8.19) and that orthogonal complements of invariant subspaces are invariant (Lemma 8.20), leading to the spectral theorem for self-adjoint maps (Theorem 8.21).',

  'sec8-4': '8.4 Orthogonal and unitary transformations -- Studies maps satisfying T* = T^{-1}, giving three equivalent characterisations (Theorem 8.23). Defines the matrix groups O(n), SO(n), U(n), SU(n). Proves eigenvalues have modulus 1, establishes spectral theorems for unitary maps (Theorem 8.29), classifies O(2) elements as rotations or reflections (Example 8.31), and derives the real orthogonal normal form with I, -I, and R_theta blocks (Theorem 8.32).',

  'sec9': '9. Singular Value Decomposition -- Introduces the SVD: every matrix A factors as A = U Sigma V* with orthonormal U, V and nonnegative diagonal Sigma. Proved via diagonalisation of the Gram matrix A*A. Derives the polar decomposition A = U_p H as a corollary. The SVD is fundamental for low-rank approximation and data compression in computational mathematics.',

  'secA': 'Appendix A -- Vector Spaces Outside Finite Dimension -- Discusses the inclusion U^0 + W^0 subset (U cap W)^0 and gives a constructive proof of equality using direct complements, without appealing to dimension counting. Notes the dependence on Zorn\'s Lemma for extending bases in infinite dimension.',

  'secB': 'Appendix B -- Normal Transformations (non-examinable) -- Generalises the spectral theorem to normal transformations (TT* = T*T), which include both self-adjoint and unitary maps. Proves the spectral theorem for normal maps (Theorem B.4), gives the spectral decomposition with orthogonal projections (Theorem B.5), simultaneous diagonalisation of commuting normal maps (Theorem B.6), and a formula for powers of Jordan blocks (Proposition B.7).',
}
});
