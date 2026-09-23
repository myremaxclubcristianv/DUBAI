export type UserRole =
  | 'PUBLIC'
  | 'USER'
  | 'CLIENT'
  | 'AGENT'
  | 'ADVISOR'
  | 'ADMIN'
  | 'SUPER_ADMIN'

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  PUBLIC: 0,
  USER: 10,
  CLIENT: 20,
  AGENT: 30,
  ADVISOR: 40,
  ADMIN: 50,
  SUPER_ADMIN: 100,
}

export interface AuthSession {
  userId: string
  email: string
  role: UserRole
}

/**
 * Checks if a given user role meets the minimum required role level
 */
export function hasMinimumRole(userRole: UserRole, requiredRole: UserRole): boolean {
  const userLevel = ROLE_HIERARCHY[userRole] ?? 0
  const requiredLevel = ROLE_HIERARCHY[requiredRole] ?? 100
  return userLevel >= requiredLevel
}

/**
 * Server-side authorization check for sensitive operational permissions
 */
export function canAccessCRM(role: UserRole): boolean {
  return hasMinimumRole(role, 'AGENT')
}

export function canAccessAdmin(role: UserRole): boolean {
  return hasMinimumRole(role, 'ADMIN')
}

export function canManageUsers(role: UserRole): boolean {
  return hasMinimumRole(role, 'SUPER_ADMIN')
}

export function canAccessClientRecords(
  userRole: UserRole,
  userId: string,
  recordOwnerId: string,
  assignedAdvisorId?: string
): boolean {
  if (hasMinimumRole(userRole, 'ADMIN')) return true
  if (userId === recordOwnerId) return true
  if (userRole === 'ADVISOR' && assignedAdvisorId === userId) return true
  return false
}
